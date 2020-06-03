import React, {Component} from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import { db } from './fb.config'

export default class SearchableList extends Component {
 
  state = {
    isLoading: true,
    text: '',
    data: []
    
  }

  constructor(props) {
    super(props);
  
    this.datacopy=[];
  }


  //readUserData = () => {}
  
  componentDidMount() {
    db
    .ref('/Restaurant')
    .once('value')
    .then(function (snapshot){
        let allretailers=[];
        snapshot.forEach(childSnapshot => {
            //var key=childSnapshot.key;
            var val=childSnapshot.val();
            allretailers.push(val);
        });
        this.datacopy=allretailers;
       
        console.log("exist?", this.datacopy);
        
    });
    this.setState({data: this.datacopy, isLoading:false});
    console.log("data: ", this.state.data, this.datacopy);
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.datacopy.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
      text: text,
    });
  }

  itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.searchData(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Enter store name"
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => (
            <Text
              style={styles.row}
              onPress={this.GetFlatListItem.bind(this, item.name)}>
              {item.name}
            </Text>
          )}
          style={{marginTop: 10}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },
});

/* eslint-disable react-native/no-inline-styles */
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

import {db} from './App';


export default class StoreList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      text: '',
      data: [],
    };

    this.setupFirebaseListener()
 }
  setupFirebaseListener = () => {
    db.ref('/Restaurant')
      .once('value')
      .then(function(snapshot) {
        allretailers = [];
        snapshot.forEach(function(childSnapshot) {
          //var key=childSnapshot.key;
          var val = childSnapshot.val();
          allretailers.push(val);
        });
        this.setState({
          ...this.state,
          data: allretailers
        })
        //this.datacopy=allretailers;
        //console.log("exist?", this.datacopy);
      });
 }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.state.data.filter(item => {
      const itemData = item.storename.toUpperCase();
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
              onPress={this.GetFlatListItem.bind(this, item.storename)}>
              {item.storename}
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

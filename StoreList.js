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
      datacopy: [],
    };
    this.allretailers=[]

    this.setupFirebaseListener()
 }
  setupFirebaseListener = () => {
    db.ref('Retailers/').once('value', snapshot => {
      console.log(snapshot);
      let restaurants = [];
      for (let restaurant in snapshot.val()) {
        let item = snapshot.val()[restaurant].storename
        restaurants.push(item)
      }
      console.log(restaurants)
      this.setState({
        ...this.state,
        data: restaurants,
        datacopy: restaurants
      });
    });
  };

  componentDidMount() {
    console.log(this.allretailers);
    this.setState({isLoading: false});
  }

  GetFlatListItem(name) {
    console.log(name);
    this.props.navigation.navigate('Restaurant Info', {
      restaurant: name
    });
  }

  searchData(text) {
    const newData = this.state.datacopy.filter(item => {
      const itemData = item.toUpperCase();
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
              onPress={this.GetFlatListItem.bind(this, item)}>
              {item}
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
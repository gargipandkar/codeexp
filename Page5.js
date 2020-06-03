/* eslint-disable no-unused-vars */
'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';
import {NavigationContainer} from 'react-navigation';
import {Firebase} from 'firebase';
import {db} from './App.js';
import ShopListItem from './ShopListItem';

type Props = {};

export default class Page5 extends Component<Props> {
  static navigationOptions = {
    title: 'Page5',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Page 5</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

'use strict';
 import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchPage from './SearchPage';
import SettingsScreen from './SettingsScreen';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Firebase from 'firebase';
let config = {
apiKey: 'AIzaSyCw3L0E-iujZVQpKhjGoPIPnH5bkrTBc9A',
authDomain: 'hackathon-4d07b.firebaseio.com',
databaseURL: 'hackathon-4d07b.firebaseio.com',
projectId: 'hackathon-4d07b',
storageBucket: 'hackathon-4d07b.appspot.com',
messagingSenderId: 'XXXXXXX'
};
let app = Firebase.initializeApp(config);
export const db = app.database();

export default createAppContainer(createMaterialBottomTabNavigator({
  Home: {screen: SearchPage},
  Settings: {screen:SettingsScreen},
  Page3: {screen: Page3},
  Page4: {screen: Page4},
  Page5: {screen: Page5}
}));
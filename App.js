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
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native'

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import SearchPage from './SearchPage';
import SettingsScreen from './SettingsScreen';
import Page3 from './Page3';
import customerUI from './customerUI';
import retailerUI from './retailerUI';
import c_options from './c_options';
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={SearchPage} />
      <Stack.Screen name="Restaurant Info" component={customerUI} />
      <Stack.Screen name="Options" component={c_options} />
      <Stack.Screen name="Store Overview" component={retailerUI} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
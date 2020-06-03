/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Input,
  Button,
  Picker,
  ActivityIndicator,
} from 'react-native';

import {db} from './fb.config.js';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'UpdateProfile',
  };

  state = {
    storename: '',
    capacity: '',
    category: 'Food',
    error: '',
  };

  onPressUpdate() {
    db.ref('/Test/' + {storename})
      .set({
        category: this.state.category,
        name: this.state.storename,
        capacity: this.state.capacity,
        current: 0,
      })
      .then(() => console.log('Data set'));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholder="Enter store name"
            label="Store Name"
            onChangeText={storename => this.setState({storename})}
            value={this.state.storename}
          />

          <Input
            placeholder="Enter capacity"
            label="Capacity"
            secureTextEntry
            onChangeText={capacity => this.setState({capacity})}
            value={this.state.capacity}
          />

          <Picker
            selectedValue={this.state.category}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({category: itemValue})
            }>
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Beauty/Fashion" value="beauty/fashion" />
            <Picker.Item label="Household" value="household" />
          </Picker>

          <Button onPress={() => this.onPressUpdate()}>Save</Button>
          <Text>{this.state.error}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  form: {
    flex: 1,
  },

  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

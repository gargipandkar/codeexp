import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from './components/Button';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Crowd Go Where</Text>
        <Button onPress={() => Alert.alert('Simple Button pressed')}>
          I am a retailer
        </Button>
        <Button onPress={() => Alert.alert('Simple Button pressed')}>
          I am a consumer
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    padding: 70,
  },
});

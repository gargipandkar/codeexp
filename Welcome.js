import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Crowd Go Where</Text>
        <Button
          title="I am a retailer"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="I am a consumer"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

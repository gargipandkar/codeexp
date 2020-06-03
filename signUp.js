/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';
import {Button} from './components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

export default class signUp extends React.Component {
  state = {
    storename: '',
    storetype: null,
    postalcode: '',
    capacity: '',
    email: '',
    password: '',
    current: 0,
    errorMessage: null,
  };

  writeUserData(storename, storetype, postalcode, capacity, current, email) {
    firebase
      .database()
      .ref('Retailers/')
      .push({
        storename,
        storetype,
        postalcode,
        capacity,
        current,
        email,
      })
      .then(data => {
        //success callback
        console.log('data ', data);
        this.props.navigation.navigate('Store Overview')
      })
      .catch(error => {
        //error callback
        console.log('error ', error);
      });
  }

  handleSignUp = () => {
    this.writeUserData(
      this.state.storename,
      this.state.storetype,
      this.state.postalcode,
      this.state.capacity,
      this.state.current,
      this.state.email,
    );
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
  };

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.form}>
        <DropDownPicker
          items={[
            {label: 'Food', value: 'Food'},
            {label: 'Fashion', value: 'Fashion'},
            {label: 'Grocery', value: 'Grocery'},
          ]}
          defaultNull={this.state.storetype === null}
          placeholder="Select your store type..."
          containerStyle={{height: 40, marginBottom: 110}}
          onChangeItem={storetype => {
            this.setState({
              storetype: storetype.value,
            });
          }}
        />
        <Input
          placeholder="Enter your store name..."
          label="Store name"
          onChangeText={storename => this.setState({storename})}
          value={this.state.storename}
        />
        <Input
          class="off"
          placeholder="Enter your store's postal code..."
          label="Postal code"
          onChangeText={postalcode => this.setState({postalcode})}
          value={this.state.postalcode}
        />
        <Input
          placeholder="Enter your store's maximum capacity..."
          label="Maximum Capacity"
          onChangeText={capacity => this.setState({capacity})}
          value={this.state.capacity}
        />
        <Input
          placeholder="Enter your email..."
          label="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <Input
          placeholder="Enter your password..."
          label="Password"
          secureTextEntry
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button onPress={() => this.handleSignUp()}>Sign Up</Button>
        <Text>{this.state.error}</Text>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>
            Already have an account?
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Sign In'
          )}>Sign Up Now</Button>
        </View>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCurrentState()}</View>;
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
  noAccount: {
    alignItems: 'center'
  },
});

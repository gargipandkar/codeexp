import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';
import {Button} from './components/Button';

export default class signUp extends React.Component {
  state = {
    storename: '',
    storetype: '',
    postalcode: '',
    capacity: '',
    email: '',
    password: '',
    current: 0,
    errorMessage: null,
  };

  writeUserData(storename, storetype, postalcode, capacity, email, password) {
    firebase
      .database()
      .ref('Restaurant/')
      .push({
        storename,
        storetype,
        postalcode,
        capacity,
      })
      .then(data => {
        //success callback
        console.log('data ', data);
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
    );
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password);
    //.then(() => this.props.navigation.navigate('Page3'))
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
        <Input
          placeholder="Enter your store name..."
          label="Store name"
          onChangeText={storename => this.setState({storename})}
          value={this.state.storename}
        />
        <Input
          placeholder="Enter your store type..."
          label="Store type"
          onChangeText={storetype => this.setState({storetype})}
          value={this.state.storetype}
        />
        <Input
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
});

import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Input';
import {Button} from './components/Button';

export default class signIn extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
    user: null,
    error: '',
  };

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });

    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user =>
        this.setState({
          authenticating: false,
          user,
          error: '',
        }),
      )
      .catch(() => {
        // Login was not successful
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user =>
            this.setState({
              authenticating: false,
              user,
              error: '',
            }),
          )
          .catch(() =>
            this.setState({
              authenticating: false,
              user: null,
              error: 'Authentication Failure',
            }),
          );
      });
  }

  onPressLogOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.setState({
            email: '',
            password: '',
            authenticating: false,
            user: null,
          });
        },
        error => {
          console.error('Sign Out Error', error);
        },
      );
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (this.state.user !== null) {
      return (this.props.navigation.navigate('Store Overview')
      )
    }


    return (
      <View style={styles.whole}>
        <View style={styles.form}>
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
          <Button onPress={() => this.onPressSignIn()}>Log In</Button>
          <Text>{this.state.error}</Text>
        </View>
        <View style={styles.noAccount}>
          <Text style={styles.noAccountText}>
            Don't have an account?
          </Text>
          <Button onPress={() => this.props.navigation.navigate('Sign Up'
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
  whole: {
    alignItems: 'stretch'
  }
});

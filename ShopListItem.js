'use strict';

import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

class ShopListItem extends Component {
  constructor(props) {
    super(props);
    let backgroundImage = require('./Resources/Picture1.png');
    this.state = {
      numberOfPeople: props.numberOfPeople,
      backgroundImage: this.getBackgroundImage(props),
    };
  }

  getBackgroundImage = props => {
    let check = props.numberOfPeople / props.seating;
    if (check <= 0.5) {
      return require('./Resources/Picture1.png');
    } else if (check < 0.75 && check > 0.5) {
      return require('./Resources/Picture2.png');
    } else {
      return require('./Resources/Picture3.png');
    }
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
        <Text style={styles.welcome2}>{this.props.name}</Text>
        <ImageBackground
          source={this.state.backgroundImage}
          style={styles.background}>
          <Text style={styles.text1}>{this.state.numberOfPeople}</Text>
          <Text style={styles.text2}>Customers</Text>
        </ImageBackground>
      </View>
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      numberOfPeople: nextProps.numberOfPeople,
      backgroundImage: this.getBackgroundImage(nextProps),
    });
  }
}

const styles = StyleSheet.create({
  text1: {
    fontWeight: 'normal',
    color: 'black',
    position: 'absolute',
    bottom: 70,
    left: 'auto',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: './Resources/comic.ttf',
  },
  text2: {
    fontWeight: 'normal',
    color: 'black',
    position: 'absolute',
    bottom: 30,
    left: 'auto',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: './Resources/comic.ttf',
  },
  background: {
    height: 150,
    width: 150,
    position: 'relative', // because it's parent
    top: 2,
    left: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome2: {
    marginTop: 0,
    marginBottom: 10,
    left: 58,
    fontSize: 18,
    textAlign: 'auto',
    color: '#656565',
  },
});

export default ShopListItem;

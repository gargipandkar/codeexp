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
  ImageBackground,
  fontFamily,
  ScrollView,
  FlatList,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {db} from './App.js';
import ShopListItem from './ShopListItem';

type Props = {};


export default class retailerUI extends Component<Props> {
    static navigationOptions = {
        title: 'Store Overview',
    }

  readUserData = () => {
    db.ref('Restaurant/').on('value', snapshot => {
      console.log(snapshot);
      let restaurants = [];
      for (let restaurant in snapshot.val()) {
        let item = {};
        item.name = restaurant;
        item.value = snapshot.val()[restaurant];
        restaurants.push(item);
      }
      this.setState({
        ...this.state,
        restaurants: restaurants,
      });
    });
  };

    constructor() {
        super();
        this.state = {
          myText: this.firebasedata,
          background: this.backgroundimage,
          bottomtext: this.btmtext,
          restaurants: [],
        };
        this.readUserData()
        
    }
    render() {
        return (
            <View style={styles.whole}>                    
                <Text style={styles.description}>
                    Hello, Retailer!
                </Text>
                <Text style={styles.welcome}>
                    Welcome back.
                </Text>
                    <FlatList
                        data={this.state.restaurants}
                        renderItem={({ item }) => (
                            <ShopListItem
                                numberOfPeople={item.value.current}
                                seating={item.value.capacity}
                                name={item.name}
                            />
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        height= {450}
                        padding= {10}
                    />
                <View style={styles.back}>
                    <Button
                        onPress={this._onSearchPressed}
                        title='Log Out'
                        style={styles.buttons}
                        type='clear'
                    />
                </View>
            </View>
        );
        
    };

}

const styles = StyleSheet.create({
  description: {
    marginTop: 0,
    marginBottom: 10,
    left: 10,
    fontSize: 34,
    textAlign: 'left',
    color: '#000000',
  },
  welcome: {
    marginTop: 0,
    marginBottom: 10,
    left: 10,
    fontSize: 18,
    textAlign: 'left',
    color: '#656565',
  },
  text3: {
    marginTop: 0,
    marginBottom: 10,
    left: 10,
    fontSize: 18,
    textAlign: 'right',
    color: '#656565',
  },
  container: {
    //flex: 1,
    flexDirection: 'row',
    //flexWrap: 'wrap',
    //alignItems: 'center'
  },
  container2: {
    padding: 40,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  item: {
    padding: 20,
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  whole: {
    padding: 5,
    marginTop: 5,
    alignItems: 'stretch',
  },
  back: {
    padding: 5,
    marginTop: 5,
    alignItems: 'center',
    bottom: 0,
    position: 'relative',
  },
  info: {
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'normal',
    color: 'black',
    position: 'absolute',
    bottom: 110,
    left: 'auto',
    fontSize: 95,
    textAlign: 'center',
    fontFamily: './Resources/comic.ttf',
  },
  text2: {
    fontWeight: 'normal',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  background: {
    height: 250,
    width: 250,
    position: 'relative',
    top: 2,
    left: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btm: {
    fontWeight: 'normal',
    color: 'black',
    top: 30,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: './Resources/comic.ttf',
  },
  contentContainer: {
    paddingVertical: 5,
    alignItems: 'center',
    height: 200,
  },
  buttonimage: {
    height: 30,
    width: 30,
    left: 5,
  },
  thumbnail: {
    height: 200,
    width: 200,
  },
  buttons: {
    marginTop: 200,
    height: 30,
    width: 30,
    left: 5,
    bottom: 0,
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
});

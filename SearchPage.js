'use strict';

import React, { Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';
import {
    createStackNavigator,
    navigation
  } from '@react-navigation/stack';

import {App} from './App';

type Props = {};

export default class SearchPage extends Component<Props> {
    static navigationOptions = {
        title: 'Welcome',
    };
    
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'Username',
            isLoading: false,
            message: '',
        };
    }

    render() {
        const spinner = this.state.isLoading ?
        <ActivityIndicator size='large'/> : null;
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Welcome to the App!
                </Text>
                <Text style={styles.description}>
                    Enter your username to continue!
                </Text>
                <View style={styles.flowRight}>
                    <TextInput 
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        value={this.state.searchString}
                        placeholder='Search via name or postcode'/>
                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Restaurant Info', {
                                restaurant: 'Kopitiam',
                                people: '20',
                                capacity: '50'
                            })
                        }
                        color='#48BBEC'
                        title='Go'
                    />
                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Restaurant Info', {
                                restaurant: 'QBHouse',
                                //people: '20',
                                //capacity: '50'
                            })
                        }
                        color='#48BBEC'
                        title='Go2'
                    />
                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Store Overview', {
                                //restaurant: 'QBHouse',
                                //people: '20',
                                //capacity: '50'
                            })
                        }
                        color='#48BBEC'
                        title='Page5'
                    />
                </View>
                <Image source={require('./Resources/house.png')} style={styles.image}/>
                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    container:{
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    image: {
        width: 217,
        height: 138,
    },
});
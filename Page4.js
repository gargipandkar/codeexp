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
    ImageBackground,
    fontFamily
} from 'react-native';

type Props = {};


export default class Page4 extends Component<Props> {
    static navigationOptions = {
        title: 'Page4',
    }
    render() {
        return (
            <View style={styles.whole}>
                <View style={styles.container}>                    
                    <Text style={styles.description}>
                        McDonald's Tiong Bahru
                        Plaza
                    </Text>
                </View>

                <View style={styles.info}>
                    <ImageBackground
                        source={require('./Resources/Picture1.png')}
                        style={styles.background}
                        >
                        <Text
                            style={styles.text1}
                        >
                            2
                        </Text>
                        <Text
                            style={styles.text2}
                        >
                            Customers
                        </Text>
                    </ImageBackground>    
                </View>
            </View>

            );
        
    };
   
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 10,
        fontSize: 34,
        textAlign: 'center',
        color: '#656565',
    },
    container:{
        padding: 30,
        marginTop: 5,
        alignItems: 'flex-end'
    },
    whole:{
        padding: 30,
        marginTop: 30,
        alignItems: 'stretch'
    },
    info:{
        padding: 30,
        marginTop: 5,
        alignItems: 'center'
    },
    text1:{
        fontWeight: 'normal',
        color: 'black',
        position: 'absolute',
        bottom: 110,
        left: 'auto',
        fontSize: 95,
        textAlign: 'center',
        fontFamily: './Resources/comic.ttf'
    },
    text2:{
        fontWeight: 'normal',
        color: 'black',
        position: 'absolute',
        bottom: 50,
        left: 'auto',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: './Resources/comic.ttf'
    },
    background:{
        height: 250,
        width: 250,
        position: 'relative', // because it's parent
        top: 2,
        left: 2,
        alignItems: 'center',
        justifyContent:'center'
    }
});
/* eslint-disable no-unused-vars */
'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  fontFamily,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import signIn from './signIn';
import {
    createStackNavigator,
    navigation,
  } from '@react-navigation/stack';
import {db} from './App';

type Props = {};

export default class customerUI extends Component<Props> {
    static navigationOptions = {
        title: 'Restaurant Info',
    }

    readUserData = () => {
        db.ref('Retailers/').on('value', (snapshot) => {
            console.log(snapshot)
            var people = snapshot.val()[this.props.route.params.restaurant].current
            var seating = snapshot.val()[this.props.route.params.restaurant].capacity
            console.log(people)
            console.log(seating)
            this.setState({
                ...this.state,
                myText: snapshot.val()[this.props.route.params.restaurant].current})
            this.calculateBackground(people, seating)
            console.log(this.state.bottomtext, this.state.rec)
        });
    }

    constructor(props) {
        super(props)
        this.state = {
            myText: '',
            background: {uri: 'https://gdurl.com/Jk9o'},
            bottomtext: '',
            rec: ''
        }
        this.readUserData()
    }
    
    calculateBackground = (people, seating) => {
        if (people / seating <= 0.5) {
            this.setState({
                ...this.state,
                background: {uri: 'https://gdurl.com/Jk9o'},
                bottomtext: 'Low Crowding',
                rec: '',
                myText: people
        })}
        else if (people / seating < 0.75 && people / seating > 0.5) {
            this.setState({
                ...this.state,
                background: {uri: 'https://gdurl.com/Kq4k'},
                bottomtext: 'Medium Crowding',
                rec: 'THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO ',
                myText: people
        })}
        else {
            this.setState({
                ...this.state,
                background: {uri: 'https://gdurl.com/yzPU'},
                bottomtext: 'High Crowding',
                rec: 'THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO ',
                myText: people
            })
        }
    }

    render() {
        return (
            <View style={styles.whole}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.container}> 
                        <Image source={{uri: 'https://gdurl.com/fL2h'}} style={styles.thumbnail}/>              
                        <Text style={styles.description}>
                            {this.props.route.params.restaurant}
                        </Text>
                    </View>

                    <View style={styles.info}>
                        <ImageBackground
                            source= {this.state.background}
                            style={styles.background}
                            >
                            <Text
                                style={styles.text1}>
                                {this.state.myText}
                            </Text>
                            <Text
                                style={styles.text2}
                            >
                                Customers
                            </Text>
                        </ImageBackground> 
                        <Text style={styles.btm}>
                            {this.state.bottomtext}
                        </Text>
                        <Text style={styles.btm}>
                            {this.state.rec}
                        </Text> 
                    </View>
                </ScrollView>
            </View>
        );
    }


    componentDidMount() {
        this.calculateBackground(this.props.route.params.people, this.props.route.params.capacity)
    }
}

const styles = StyleSheet.create({
    description: {
        marginTop: 0,
        marginBottom: 10,
        fontSize: 34,
        textAlign: 'center',
        color: '#656565',
    },
    container:{
        padding: 5,
        marginTop: 0,
        alignItems: 'center'
    },
    whole:{
        padding: 0,
        marginTop: 5,
        alignItems: 'stretch'
    },
    back:{
        padding: 5,
        marginTop: 5,
        alignItems: 'flex-start'
    },
    info:{
        padding: 10,
        marginTop: 5,
        alignItems: 'center'
    },
    text1:{
        fontWeight: 'normal',
        color: 'black',
        position: 'absolute',
        bottom: 70,
        left: 'auto',
        fontSize: 95,
        textAlign: 'center',
    },
    text2:{
        fontWeight: 'normal',
        color: 'black',
        position: 'absolute',
        bottom: 30,
        left: 'auto',
        fontSize: 20,
        textAlign: 'center',
    },
    background:{
        height: 200,
        width: 200,
        position: 'relative', // because it's parent
        top: 2,
        left: 2,
        alignItems: 'center',
        justifyContent:'center'
    },
    btm:{
        fontWeight: 'normal',
        color: 'black',
        top: 30,
        fontSize: 20,
        textAlign: 'center',
    },
    contentContainer: {
        paddingVertical: 5
    },
    buttonimage:{
        height: 30,
        width: 30,
        left: 5,
    },
    thumbnail:{
        height: 200,
        width: 200,
    },
});

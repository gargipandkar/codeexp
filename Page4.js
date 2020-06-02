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
    fontFamily,
    ScrollView,
    BackHandler,
    TouchableOpacity
} from 'react-native';
import SearchPage from './SearchPage';
import Page5 from './Page5';
import {NavigationContainer} from 'react-navigation';
import Firebase from 'firebase';
import {db} from './App';
// let config = {
//   apiKey: 'AIzaSyCw3L0E-iujZVQpKhjGoPIPnH5bkrTBc9A',
//   authDomain: 'hackathon-4d07b.firebaseio.com',
//   databaseURL: 'hackathon-4d07b.firebaseio.com',
//   projectId: 'hackathon-4d07b',
//   storageBucket: 'hackathon-4d07b.appspot.com',
//   messagingSenderId: 'XXXXXXX'
// };
// let app = Firebase.initializeApp(config);
// export const this.db = app.database();


type Props = {};


export default class Page4 extends Component<Props> {
    static navigationOptions = {
        title: 'Page4',
    }

    readUserData = () => {
        db.ref('Restaurant/').on('value', (snapshot) => {
            console.log(snapshot)
            var people = snapshot.val()[this.state.header].current
            var seating = snapshot.val()[this.state.header].capacity
            this.setState({myText: snapshot.val()[this.state.header].current})
            if (people / seating <= 0.5) {
                this.setState({
                    background: require('./Resources/Picture1.png'),
                    bottomtext: 'Low Crowding',
                    rec: ''
            })}
            else if (people / seating < 0.75 && people / seating > 0.5) {
                this.setState({
                    background: require('./Resources/Picture2.png'),
                    bottomtext: 'Medium Crowding',
                    rec: 'THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO '
            })}
            else {
                this.setState({
                    background: require('./Resources/Picture3.png'),
                    bottomtext: 'High Crowding',
                    rec: 'THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO THIS IS WHERE THE RECOMMENDATIONS WILL GO '
            })}
        });
    }

    constructor() {
        super()
        this.state = {
            header: 'Kopitiam',
            myText: this.firebasedata,
            background: this.backgroundimage,
            bottomtext: this.btmtext,
            rec: this.reccom
        }
        this.readUserData()
    }

    render() {
        return (
            <View style={styles.whole}>
                <View style={styles.back}>
                    <TouchableOpacity 
                        onPress={this._back}>
                            <Image source={require('./Resources/Back.jpg')} style={styles.buttonimage}/>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.container}> 
                        <Image source={require('./Resources/ToastBox PLQ.jpg')} style={styles.thumbnail}/>              
                        <Text style={styles.description}>
                            {this.state.header}
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
        
    };

    _back = () => {
        this.props.navigation.goBack()
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
    },
    btm:{
        fontWeight: 'normal',
        color: 'black',
        top: 30,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: './Resources/comic.ttf'
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
'use strict';

import React, { Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {Button} from 'react-native-elements';

type Props = {};

export default class c_options extends Component<Props> {
    static navigationOptions = {
        title: 'Options',
    }

    render() {
        return (
            <View style={styles.whole}>
                <View style={styles.back}>
                    <TouchableOpacity 
                        onPress={this._back}>
                            <Image source={{uri: 'https://gdurl.com/u53H'}} style={styles.buttonimage}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>
                    Hello, Friend!
                </Text>
                <Text style={styles.welcome}>
                    What would you like to do?
                </Text>
                <Text style={styles.text2}>
                    View All Stores
                </Text>
                <View style={styles.whole2}>
                    <Button
                        onPress={this._back}
                        title='SEARCH'
                        style={styles.buttons}
                        type='outline'
                    />
                    <Text style={styles.text2}>
                        Browse by Category
                    </Text>
                </View>
                <View style={styles.column}>
                    <View>
                        <TouchableOpacity 
                            onPress={this._back}>
                                <Image source={{uri: 'https://gdurl.com/pbBI'}} style={styles.buttonimage2}/>
                                <Text style={styles.text1}> Food </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            onPress={this._back}>
                                <Image source={{uri: 'https://gdurl.com/pbBI'}} style={styles.buttonimage2}/>
                                <Text style={styles.text12}> Beauty/
                                Fashion </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            onPress={this._back}>
                                <Image source={{uri: 'https://gdurl.com/pbBI'}} style={styles.buttonimage2}/>
                                <Text style={styles.text1}> Household </Text>
                        </TouchableOpacity>
                    </View>               
                </View>
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
    whole:{
        padding: 5,
        marginTop: 5,
        alignItems: 'stretch'
    },
    whole2:{
        padding: 5,
        marginTop: 5,
        alignItems: 'center'
    },
    back:{
        padding: 5,
        marginTop: 5,
        alignItems: 'flex-start'
    },
    text1:{
        fontWeight: 'normal',
        color: 'black',
        bottom: 70,
        //right: 10,
        fontSize: 15,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    text12:{
        fontWeight: 'normal',
        color: 'black',
        bottom: 70,
        //right: 10,
        fontSize: 12,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    text2:{
        fontWeight: 'normal',
        color: 'black',
        fontSize: 34,
        textAlign: 'center',
        marginTop: 50,
    },
    background:{
        height: 250,
        width: 250,
        position: 'relative',
        top: 2,
        left: 2,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonimage:{
        height: 30,
        width: 30,
        left: 5,
    },
    buttonimage2:{
        height: 110,
        width: 110,
    },
    buttons:{
        marginTop:20,
        height: 30,
        width: 70,
        alignSelf: 'center'
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
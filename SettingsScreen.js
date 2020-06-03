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

type Props = {};

function HomeScreen({ navigation }) {
    return (
      <Button
        title="Go"
        onPress={() =>
          navigation.navigate('Page4')
        }
      />
    );
  }

export default class SettingsScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Settings',
    }

    render() {
        return (
            <View style={styles.container}>                    
                <Text style={styles.description}>
                    Settings
                </Text>
                
            </View>
            );
        
    };
   
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
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { db } from './App';

const category="FASHION";
class BrowseCat2 extends Component {
   constructor(props) {
      super(props)
      this.state = {
         names: [], 
      }

      this.setupFirebaseListener()
   }
   setupFirebaseListener = () => {
      db
         .ref('Retailers/')
         .once('value')
         .then((snapshot) => {
            let retailers = []
            snapshot.forEach((childSnapshot) => {
               var val = childSnapshot.val();
               if (val.storetype == 'Fashion') {
                  retailers.push(val);
               }
            });

            this.setState({
               ...this.state,
               names: retailers,
            })
         });
   }
   render() {
      return (
         <View>
            <View style={styles.header}>
               <Text style={styles.title}>{category}</Text>
            </View>
            
            
            <View>
               <ScrollView>
                  {
                     this.state.names.map((item, index) => (
                        <View 
                           key={item.key}
                           style={styles.item} >
                           <Text
                              onPress={() => {
                                 this.props.navigation.navigate('Restaurant Info', {
                                    restaurant: item.storename
                                 });
                              }}>
                              {item.storename}
                           </Text>
                        </View>
                     ))
                  }
               </ScrollView>
            </View>
         </View>
      )
   }

   componentDidMount() {
      this.setupFirebaseListener()
   }
}



export default BrowseCat2

const styles = StyleSheet.create ({
   header: {
      justifyContent: 'center', 
      margin: 5, 
   },

   title: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 20,
      textAlign: 'center',
   },

   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#FFFF'
   }
})

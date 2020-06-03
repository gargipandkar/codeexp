import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { db } from './App';

const category="FOOD";
retailerscat1=[];

class BrowseCat3 extends Component {
   constructor(props) {
      super(props)
      this.state = {
         names: retailerscat1, 
      }

      this.setupFirebaseListener()
   }
   setupFirebaseListener = () => {
      db
         .ref('Retailers/')
         .once('value')
         .then(function(snapshot){
            retailers3=[]
               snapshot.forEach(function(childSnapshot){
                  //var key=childSnapshot.key;
                  var val=childSnapshot.val();
                  //console.log(key)
                  if (val.storetype=='Grocery') {
                     retailers3.push(val);
                  }
                  retailerscat3=retailers3;
                  //console.log(retailerscat3);
          
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
                        <View key = {item.key} style = {styles.item}>
                           <Text onPress={() => {this.props.navigation.navigate('Restaurant Info', {
                              restaurant: item.storename
                           });}}>
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



export default BrowseCat3

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

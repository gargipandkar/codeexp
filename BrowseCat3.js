import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { db } from './fb.config';

const category="HOUSEHOLD";
retailerscat3=[];

db
  .ref('/Restaurant')
  .once('value')
  .then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
          //var key=childSnapshot.key;
          var val=childSnapshot.val();
          //console.log(key)
          if (val.category=='household') {
              retailerscat3.push(val);
          }
          //console.log(retailerscat3);
          
      });
  });

//console.log(retailerscat3);

class ScrollViewExample extends Component {
   state = {
      names: retailerscat3, 
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
                        <View key = {item.name} style = {styles.item}>
                           <Text onPress={() => console.log(item.name)}>{item.name}</Text>
                        </View>
                     ))
                  }
               </ScrollView>
            </View>
         </View>
      )
   }
}
export default ScrollViewExample

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
      backgroundColor: '#d2f7f1'
   }
})
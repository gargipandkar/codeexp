import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { db } from './fb.config';

retailers=[]

db
  .ref('/Restaurant')
  .once('value')
  .then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
          var key=childSnapshot.key;
          var val=childSnapshot.val();
          //console.log(key)
          if (val.category!=='food') {
              retailers.push(val);
          }
          console.log(retailers);
          
      });
  });

console.log(retailers);

class ScrollViewExample extends Component {
   state = {
      names: retailers  
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.name} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
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
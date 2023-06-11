import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './src/input';

export default function App() {
 return(
  <View style={styles.container}>
   <Input/>
  </View>
 
 )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})



import React, { useState } from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity } from 'react-native';

const Inputs = () => {
    const [avanca25, setAvanca25] = useState(0);
    const [avanca2, setAvanca2] = useState(2);
    
    
  return (
    <View style={styles.container} >  
        <Text style={{ fontSize: 28, textAlign:'center'}}> {avanca25} </Text>
        <Button
          title= "+"
          onPress={() => setAvanca25(avanca25 + 25)}
          color='#FFFF00'
        />
        <Button
          title="-"
          onPress={() => setAvanca25(avanca25 - 25)}
        />
 

        <Text style={{ fontSize: 32, textAlign:'center' }}> {avanca2} </Text>
        <Button
          title="+"
          onPress={() => setAvanca2((avanca2 * 2))}
          color='#FFC0CB'
        />
        <Button
          title="-"
          onPress={() => setAvanca2(avanca2 / 2)}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderColor:'Green',
        borderWidth: 8,
        padding:17,
        margin:22
    }, 
    botao:{
        flex:1,
        backgroundColor:'#F5F5DC',
    }
})

export default Inputs;
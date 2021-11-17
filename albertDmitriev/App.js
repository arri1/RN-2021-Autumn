import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

export default function App(){
const [bgColor, setBgColor] = useState('white');
const changeBgColor = () => {
    
    setBgColor('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
}

    return(
        <View style={[styles.mainBlock, {backgroundColor: bgColor}]}> 
            <Button title='Нажми, чтобы изменить цвет' onPress={changeBgColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
   mainBlock: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
   }
});
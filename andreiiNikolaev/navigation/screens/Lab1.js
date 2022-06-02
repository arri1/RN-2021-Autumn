import  React, {useState} from 'react';
import {StyleSheet,Text, Button, View} from 'react-native';

export default function Lab1() {
    
  const randomRgb = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`; 
      }
    
  const [colors, setColors] = useState('rgb(0,0,0)');

    return (
        <View style={styles.container}>            
                <View style={styles.elementStyle}>
                    <Text style={{backgroundColor: colors, width: 300, height: 300, borderRadius: 5, marginVertical: 40 }}/>
                    <Button title ="Random color" onPress={() => {setColors(randomRgb());  }}/>
                </View>   
        </View>  
    )
}  

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'aqua',
    }, 
    elementStyle: {
      top: '15%',
      alignItems: 'center',
      justifyContent: 'center',   
    },
  }
  )
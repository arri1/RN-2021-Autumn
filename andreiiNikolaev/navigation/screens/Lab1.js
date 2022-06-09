import  React, {useState} from 'react';
import {StyleSheet,Text, Button, View} from 'react-native';

const Lab1 = () => {
    
  const randomRgb = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`; 
      }
    
  const [colors, setColors] = useState('rgb(0,0,0)');

return (
        <SafeAreaView style={styles.container}>          
          <Text style={{backgroundColor: colors, width: 300, height: 300, borderRadius: 15, marginVertical: 40 }}/>        
          <TouchableOpacity style={styles.button} onPress={() => {setColors(randomColor());  }} >
            <Text style = {styles.text} >random color</Text>
          </TouchableOpacity>                
        </SafeAreaView>
    )
}  

const styles = StyleSheet.create({
    container: {
       flex: 1,
       height: '100%',
       backgroundColor: '#FCEBB6',
       alignItems: 'center',   
       justifyContent: 'center',     
    }, 
    button: {      
      backgroundColor: '#F07818',
      borderBottomColor:'#5E412F',
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 15,
      marginLeft: 100,
      marginRight: 100,  
   },
   text: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
      borderBottomColor:'#5E412F',
      borderWidth: 1
   },

export default Lab1;
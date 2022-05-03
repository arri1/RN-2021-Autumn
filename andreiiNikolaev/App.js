import React,{useState} from 'react';
import {StyleSheet,Text, Button, View} from 'react-native';
import Header from './components/Header';

export default function App() {
  
  const randomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`; 
        }
    
  const [colors, setColors] = useState([]);

  return (
    <View style={styles.container}>
      <Header />   
      <View style={styles.elementStyle}>
       <View style={styles.colorBox}>
         <Text style={{backgroundColor: randomRgb(), width: 300, height: 300, borderRadius: 5 }}></Text>
       </View>
       <Button title ="Random color" onPress={() => {setColors([...colors, randomRgb()]);  }}/>
      </View>   
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'aqua',
  },
  colorBox: {
   marginVertical: 40,
  },
  elementStyle: {
    top: 60,
    alignItems: 'center',
    justifyContent: 'center',   
  },
}
)


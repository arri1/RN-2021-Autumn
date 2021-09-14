import React from 'react';
import type {Node} from 'react';
import Background from './back.jpg';
import Saitama from './saitama.png';
import SaitamaOk from './saitamaOk.png';
import Punch from './punch.gif';


import{
  View,
	SafeAreaView,
	Text,
  Image,
  StyleSheet,
  ImageBackground, 
}from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: -165,
    marginLeft: 275,
  },
  image: {
    marginTop: '70%',
    marginLeft: '10%',
    alignSelf: 'center',
  },
  back:{
    height:'100%',
  }  
});

const App: () => Node = () => {
  return (
 
    <View>
      
      <ImageBackground source={Background} style={styles.back}>
      <Image 
      style={styles.image} 
      source={SaitamaOk}
      height={200}
      width={240}
       />
      <Text style={styles.text}>Hello{"\n"}world!</Text>
      </ImageBackground>
    </View>
    
    
  );
};




export default App;

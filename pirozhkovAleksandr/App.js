import React, {useState} from 'react';

import toasty from './assets/toasty.png';


import{
  View,
	SafeAreaView,
	Text,
  Image,
  StyleSheet,
  ImageBackground, 
  TouchableOpacity,
  ScrollView
}from 'react-native';

const styles = StyleSheet.create({
  main:{
    height: '100%',
  },
  box:{
    height: 150,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  littleBox:{
    height: 50,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#DBAB84'
  },
  text:{
    fontSize: 20,

  },
  counterContainer:{
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#DBBD86',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
  },
  image:{
    position: 'absolute',
    top: 60,
    bottom: 0,
    left: 150,
    right: 0,
  }
});

const App = () =>  {
  const [color, setColor] = useState('#4A398F');
  const [counter, setCounter] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <View style={styles.image}>
          {shouldShow ? (
       
            <Image
              source={toasty}
            />
          ): null}
        </View>

        <TouchableOpacity
          style = {[styles.box,{backgroundColor: '#58DB5A'},{marginTop: 150}]}
          onPress={()=>setColor('#458F46')}>
          <Text style={styles.text}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {[styles.box,{backgroundColor: '#836EDB'}]}
          onPress={()=>setColor('#4A398F')}>
          <Text style={styles.text}>Click me too</Text>
        </TouchableOpacity>
        
        <View style={styles.counterContainer}>
          <Text style={styles.text}>{counter}</Text>
        </View>

        <TouchableOpacity
          style = {styles.littleBox}
          onPress={()=> setCounter(counter + 1)}>
          <Text style={styles.text}>Add some digits</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style = {[styles.littleBox,{backgroundColor: '#B16FDB'}]}
          onPress={()=>setShouldShow(!shouldShow)}>
          <Text style={styles.text}>Toasty</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
    
    
  );
};




export default App;

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#5CBDDB');

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setColor( '#' + Math.floor(Math.random()*12581375).toString(20) )}>
          <Text style = {styles.bText}>Tap Me</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    height: '100%'
  },
  button: {
      height: 50,
      margin: 150,
      backgroundColor: '#484f58',
      borderRadius: 15,
      marginTop: '50%',
  },
  bText:
  {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '10%',
    color: '#FFFFFF',


  },
});

export default Lab1;
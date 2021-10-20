import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

const lab1 = () => {
  const [color, setColor] = useState('#75FFB1');
   
  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setColor( '#' + Math.floor(Math.random()*2021).toString(16) )}>
          <Text style = {styles.bText}>Нажми меня</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default lab1;

const styles = StyleSheet.create({
  main:{
    height: '100%'
  },
  button:{
    height: 100,
    margin: 100,
    marginTop: '50%',
    borderRadius: 100,
    backgroundColor: '#9AFF8F'
  },
  bText: 
  { 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '16%',
    width: 200
  },
});

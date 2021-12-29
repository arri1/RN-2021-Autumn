import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#752FB1');

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setColor( '#' + Math.floor(Math.random()*12581375).toString(20) )}>
          <Text style = {styles.bText}>PushMe</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    height: '100%'
  },
  button:{
    height: 150,
    margin: 125,
    marginTop: '50%',
    borderColor: '#C446DB',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: '#FF0000'
  },
  bText:
  {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '40%',
    color: '#FFFFFF',
    width: 140
    
  },
});

export default Lab1;
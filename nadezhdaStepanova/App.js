import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const App = () => {
  const [color, setColor] = useState('#752FB1');

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setColor( '#' + Math.floor(Math.random()*12581375).toString(15) )}>
          <Text style = {styles.bText}>Poke me</Text>
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
    borderRadius: 100,
    backgroundColor: '#FF0000'
  },
  bText:
  {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '20%',
    width: 150
  },
});

export default App;
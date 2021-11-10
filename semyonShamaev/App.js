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
          style={styles.countButton}
          onPress={() => setColor( '#' + Math.floor(Math.random() * Math.pow(256, 3)).toString(16))}>
          <Text style = {styles.bText}>Поменять фон</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    height: '100%'
  },
  countButton: {
    backgroundColor: '#5CBDDB',
    margin: 25,
    borderRadius: 100,
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default App;
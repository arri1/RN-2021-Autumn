import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

let randomHex = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [color, setColor] = useState('#F5909E');
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.box}
          onPress={() => setColor(randomHex())}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  box: {
    height: 100,
    width: 100,
    margin: 160,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
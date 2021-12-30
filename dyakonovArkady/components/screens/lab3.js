import React, {useState, useMemo} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'likes';
};

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  const onPressHandler = () => {
    const text = expensiveFunction();
    setCount(count + 1);
    setText(`${count} ${text}`);
  };

  const operation = useMemo(expensiveFunction, []);
  
  const onPressHandlerSecond = () => {
    const text = operation;
    setCount(count + 1);
    setText(`${count} ${text}`);
  };

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.button } onPress={onPressHandler} > 
          <Text style = {styles.bText}>Use State</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerSecond} > 
          <Text style = {styles.bText}>Use Memo</Text> 
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#BCEEEB',
    padding: 10,
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
   button: {
    margin: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#54A9F5',
  },
  text: { 
    marginTop: '40%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000000'
  },
  bText: { 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 6,
    color: '#FFFFFF'
  },
});

export default Lab3;
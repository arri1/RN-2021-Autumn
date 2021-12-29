import React, {useState, useMemo} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'Клик';
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
      <ScrollView style={styles.main}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.button } onPress={onPressHandler} >
          <Text style = {styles.bText}>Кнопка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerSecond} >
          <Text style = {styles.bText}>UseMemo Кнопка</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    borderRadius: 0,
    width: "100%",
    height: "100%",

  },
   button: {
    backgroundColor: '#E6E6FA',
    paddingHorizontal: 15   ,
    paddingVertical: 15,
    borderRadius: 0,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 50,
    borderWidth: 2,
    borderColor: '#444586',

  },
  text: {
    marginTop: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000'
  },
  bText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#000000'
  },
});

export default Lab3;
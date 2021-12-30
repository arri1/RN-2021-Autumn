import React, {useState, useMemo} from 'react';
import {    
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { increaseCounter } from '../../store/tasks';

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'Счетчик';
};
const Lab3 = () => {
  const count = useSelector((state) => state.background.counter)
  const dispatch = useDispatch()

  const [text, setText] = useState('');

  const onPressHandler = () => {
    const text = expensiveFunction();
    dispatch(increaseCounter())
    setText(`${count} ${text}`);
  };
  const operation = useMemo(expensiveFunction, []);

  const onPressHandlerSecond = () => {
    const text = operation;

    dispatch(increaseCounter())
    setText(`${count} ${text}`);
  };

  return (
    <View>
        
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.scroll}>
        
      <Text style={styles.text}>{text}</Text>

        <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style = {styles.boxText}>Use State</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerSecond}>
        <Text style = {styles.boxText}>Use Memo</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    
    main: {
        height: '100%',   
        backgroundColor: '#E1E4E7',
    },
    button: {
      width: 240,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#2F88F0',
      marginTop: 10,
      alignSelf: 'center',
    },
    scroll: {
      margin: 15,
    },
    text: { 
      marginTop: '40%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#000000'
    },
    boxText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 6,
        color: '#FFFFFF'
    },
  });

export default Lab3;
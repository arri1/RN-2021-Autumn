import React, {useState, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increaseCounter} from '../../store/tasks';
import {    
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const counterFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'Счёт';
};

const Lab3 = () => {
  const count = useSelector((state) => state.background.counter)

  const dispatch = useDispatch()

  const onPressHandlerState = () => {
    const count = operation;
    dispatch(increaseCounter())
  };

  const onPressHandlerMemo = () => {
    const count = counterFunction();
    dispatch(increaseCounter())
  };
  const operation = useMemo(counterFunction, []);

  return (
    <View>       
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerState}>
        <Text style = {styles.count}>{count}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerMemo}>
        <Text style = {styles.count}>{count}</Text></TouchableOpacity>
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
      width: 260,
      height: 260,
      borderRadius: 20,
      backgroundColor: '#C4C4C4',
      marginTop: 10,
      alignSelf: 'center',
    },
    scroll: {
      margin: 15,
    },
    count: {
      fontWeight: 'normal',
      textAlign: 'center',
      fontSize: 40,
      marginTop: 100,
      color: '#FFFFFF'
  },
  });

export default Lab3;
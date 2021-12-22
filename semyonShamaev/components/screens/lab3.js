import React, {useState, useMemo} from 'react';
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
  const [memoCount, setMemoCount] = useState(0);
  const [memoText, setMemoText] = useState('0');

  const [stateCount, setStateCount] = useState(0);
  const [stateText, setStateText] = useState('0');

  const onPressHandlerState = () => {
    const stateText = operation;
    setStateCount(stateCount + 1);
    setStateText(`${stateCount} ${stateText}`);
  };

  const onPressHandlerMemo = () => {
    const memoText = counterFunction();
    setMemoCount(memoCount + 1);
    setMemoText(`${memoCount} ${memoText}`);
  };
  const operation = useMemo(counterFunction, []);

  return (

    <View>
    <SafeAreaView style={styles.main}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerState}>
        <Text style = {styles.stateText}>{stateText}</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHandlerMemo}>
        <Text style = {styles.memoText}>{memoText}</Text></TouchableOpacity>
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
    memoText: {
        fontWeight: 'normal',
        textAlign: 'center',
        fontSize: 40,
        marginTop: 100,
        color: '#FFFFFF'
    },
    stateText: {
      fontWeight: 'normal',
      textAlign: 'center',
      fontSize: 40,
      marginTop: 100,
      color: '#FFFFFF'
  },
  });

export default Lab3;
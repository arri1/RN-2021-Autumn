import React, {useState, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increaseCounter} from '../../store/tasks';

const Lab3 = () => {
  const [click, setClick] = useState(0);
  const count = useSelector((state) => state.background.counter)
  const dispatch = useDispatch()

  const regularFunction = () => {
    let i = 0;
    while (i < 65000000) {
      i++;
    }
  };
  const Memo= useMemo(regularFunction, []);

  const onPressHandlerRegular = () => {
    const count = regularFunction();
    setClick(click + 1);
    dispatch(increaseCounter())
    
  };
  const onPressHandlerMemo = () => {
    const count = Memo;
    setClick(click + 1);
    dispatch(increaseCounter())
  };
  
  return (
    <SafeAreaView style={styles.main}>
    <View>
      <View>
        <Text style={styles.message}>Медленный вариант</Text>
        <Text style={styles.counter}>Лайков❤️</Text>
        <TouchableOpacity onPress={onPressHandlerRegular} style={styles.button}>
          <Text style={styles.text}>Нажми</Text> 
          <Text style={[styles.text, {textTransform: 'uppercase'}]}>{count}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.message}>Быстрый вариант</Text>
        <Text style={styles.counter}>Лайков❤️</Text>
        <TouchableOpacity onPress={onPressHandlerMemo} style={styles.button}>
          <Text style={styles.text}>Нажми</Text>
          <Text style={[styles.text, {textTransform: 'uppercase'}]}>{count}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',   
    backgroundColor: '#FFFFFF',
  },
  counter: {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 100,
    marginLeft: 85,
    marginRight: 85,
    marginBottom: 50,
  },
  message: {
    paddingTop: 50,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});

export default Lab3;
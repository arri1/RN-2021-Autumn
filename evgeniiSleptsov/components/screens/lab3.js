import React, {useState, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const Lab3 = () => {
  const [click, setClick] = useState(0);
  const [text, setText] = useState('');

  const regularFunction = () => {
    let i = 0;
    while (i < 5000000) {
      i++;
    }
  };
  const memoFunction = useMemo(regularFunction, []);

  const onPressHandlerRegular = () => {
    const count = regularFunction();
    setClick(click + 1);
  };
  const onPressHandlerMemo = () => {
    const count = memoFunction;
    setClick(click + 1);
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.counter}>Кликов {click}</Text>
        <TouchableOpacity onPress={onPressHandlerRegular} style={styles.button}>
          <Text style={[styles.text, {color: 'white'}]}>Без useMemo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressHandlerMemo} style={styles.button}>
          <Text style={[styles.text, {color: 'white'}]}>useMemo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#2F42B2',
  },
  counter: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5AC8FA',
    borderRadius: 10,
    width: 121,
    height: 53,
    marginLeft: 150,
    marginBottom: 50,
  },
  text: {
    fontSize: 15,
  },
});

export default Lab3;
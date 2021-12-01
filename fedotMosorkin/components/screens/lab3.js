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
    <View>
      <View>
        <Text style={styles.message}>Клик без useMemo()</Text>
        <Text style={styles.counter}>Кликов {click}</Text>
        <TouchableOpacity onPress={onPressHandlerRegular} style={styles.button}>
          <Text style={styles.text}>Клик</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.message}>Клик с useMemo()</Text>
        <Text style={styles.counter}>Кликов {click}</Text>
        <TouchableOpacity onPress={onPressHandlerMemo} style={styles.button}>
          <Text style={styles.text}>Клик</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    marginLeft: 150,
    marginRight: 150,
    marginBottom: 50,
  },
  message: {
    paddingTop: 50,
    fontSize: 25,
    textAlign: 'center',
    color: 'green',
  },
  text: {
    fontSize: 15,
  },
});

export default Lab3;

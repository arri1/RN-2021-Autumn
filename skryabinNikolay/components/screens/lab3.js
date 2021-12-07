import React, {useState, useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const Lab3 = () => {
  const [click, setClick] = useState(0);
  const [text, setText] = useState('');

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
  };
  const onPressHandlerMemo = () => {
    const count = Memo;
    setClick(click + 1);
  };

  return (
    <View>
      <View>
        <Text style={styles.message}>Медленный вариант</Text>
        <Text style={styles.counter}>Лайков❤️ {click}</Text>
        <TouchableOpacity onPress={onPressHandlerRegular} style={styles.button}>
          <Text style={styles.text}>Нажми</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.message}>Быстрый вариант</Text>
        <Text style={styles.counter}>Лайков❤️ {click}</Text>
        <TouchableOpacity onPress={onPressHandlerMemo} style={styles.button}>
          <Text style={styles.text}>Нажми</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
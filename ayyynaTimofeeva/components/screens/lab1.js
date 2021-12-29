import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#AC99C0');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 1) {
      setColor('#A5D0FF');
    }
    if (count == 2) {
      setColor('#9E9E9E');
    }
    if (count == 3) {
      setColor('#4EA077');
    }
    if (count == 4) {
      setColor('#A04EA0');
    }
    if (count == 5) {
      setCount(0);
      setColor('#AC99C0');
    }
  })

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>
        Для выбора цвета фона кликните: {'\n'}
        1 раз - голубой {'\n'}
        2 раза - серый {'\n'}
        3 раза - зеленый {'\n'}
        4 раза - фиолетовый {'\n'}
        5 раз для обнуления
      </Text>
      <Text style={styles.text2}> Вы кликнули: {count} </Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}> Кликните </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    backgroundColor: '#9D88B4',
    color: '#ECE7E7',
    textAlign: 'center',
    borderRadius: 5,
    width: 300,
    height: 130,
    fontSize: 17
  },
  text2: {
    color: '#4F2967',
    fontSize: 15,
    margin: 10
  },
  button: {
    backgroundColor: '#9D88B4',
    borderRadius: 5,
    width: 130
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  }
});

export default Lab1;

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f0f',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 27,
    elevation: 10,
    backgroundColor: '#808080',
  },
});

const Lab1 = () => {
  const [color, setColor] = useState('#000000');
  const [count, setCount] = useState(1);
  const [name, setName] = useState(' понедельник: СРС день;');
  useEffect(() => {
    if (count === 2) {
      setName('о вторник: 14:00-Анализ данных; 15:50-Анализ данных;');
    }
    if (count === 3) {
      setName(' среду: 14:00-Технологии блокчейн; 15:50-Разработка мобильных приложений*\Технологии блокчейн**; 17:40-Разработка мобильных приложений;');
    }
    if (count === 4) {
      setName(' четверг: СРС день;');
    }
    if (count === 5) {
      setName(' пятницу: 15:50-Основы ОС Linux; 17:40-Основы ОС Linux;');
    }
    if (count === 6) {
      setName(' субботу: 9:50-Математическое моделирование; 11:40-Математическое моделирование; 14:00-Проектная деятельность;');
      setCount(1);
    }
    if (count === 0) {
      setName(' понедельник: СРС день;');
      setCount(5);
    }
  });
  return (
    <View style={[styles.container, { backgroundColor: color }]}>

      <Text style={styles.text}>
        Пары в
        {name}
      </Text>
      <Button title="Next" onPress={() => { setCount(count + 1); }} />
      <Button title="Back" onPress={() => { setCount(count - 1); }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setColor(`#${Math.floor(Math.random() * 22222222).toString(16)}`)}
      />
    </View>
  );
};

export default Lab1;
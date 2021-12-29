import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 323,
    height: 258,
    marginLeft: 44,
    marginTop: 96,
    backgroundColor: '#5AC8FA',
    borderRadius: 30,
  },
  text: {
    color: 'black',
    margin: 12,
    fontFamily: 'rye',
  },
  textContainer: {
    color: 'black',
    margin: 18,
    fontFamily: 'rye',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 121,
    height: 53,
    backgroundColor: '#5AC8FA',
    borderRadius: 10,
    marginTop: 20,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 26,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#5AC8FA',
  },
  button2: {
    marginLeft: 21,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 26,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#5AC8FA',
  },
  container1: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    <View style={[styles.main, {backgroundColor: color}]}>
          <View style={styles.container}>
            <Text style={styles.textContainer}>Есть такая пословица: {name}</Text>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                setCount(count - 1);
              }}>
              <Text>Назад</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                setCount(count + 1);
              }}>
              <Text>След</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setColor('#' + Math.floor(Math.random() * 21341241).toString(16))
            }>
            <Text style={styles.text}>Цвет</Text>
          </TouchableOpacity>
        </View>
      );
    };

export default Lab1;
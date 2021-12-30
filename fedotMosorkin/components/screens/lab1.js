import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  text: {
    color: 'black',
    margin: 14,
    fontFamily: 'rye',
  },
  textContainer: {
    color: 'black',
    margin: 18,
    fontFamily: 'rye',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 121,
    height: 53,
    backgroundColor: '#34C759',
    borderRadius: 30,
    marginTop: 20,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 0,
    backgroundColor: '#34C759',
  },
  button2: {
    marginLeft: 21,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 100,
    backgroundColor: '#34C759',
  },
  container1: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Lab1 = () => {
  const [color, setColor] = useState('#7B47E9');
  const [count, setCount] = useState(1);
  const [name, setName] = useState(
    'Не плюй в колодец, пригодится воды напиться.',
  );
  useEffect(() => {
    if (count === 2) {
      setName('Без труда не выловишь и рыбку из пруда.');
    }
    if (count === 3) {
      setName('Не беречь поросли, не видать и дерева.');
    }
    if (count === 4) {
      setName('Дважды в год лето не бывает.');
    }
    if (count === 5) {
      setName('Летом не припасешь, зимой не принесешь.');
    }
    if (count === 6) {
      setName('Не плюй в колодец, пригодится воды напиться');
      setCount(1);
    }
    if (count === 0) {
      setName('Дважды в год лето не бывает.');
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

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button
} from 'react-native';

const App = () => {
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count==1) {
      setColor('pink');
    }
    if (count==2) {
      setColor('#9E9E9E');
    }
    if (count==3) {
      setColor('#4EA077');
    }
    if (count==4) {
      setColor('#A04EA0');
    }
    if(count==5) {
      setCount(0);
      setColor('white');
    }
  })

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>
        Для выбора цвета фона кликните: {'\n'}
        1 раз - розовый {'\n'}
        2 раза - серый {'\n'}
        3 раза - зеленый {'\n'}
        4 раза - фиолетовый {'\n'}
        5 раз для обнуления
      </Text>
      <Text> Вы кликунули: {count} </Text>
      <Button title='Кликните' onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  }
});

export default App;
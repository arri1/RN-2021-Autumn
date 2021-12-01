import React, {useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const randomHex = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    expensiveFunction();
    return color;
  };

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5909E',
        marginTop: 10,
        },
    scroll: {
        margin: 15,
        },
    box: {
        height: 100,
        width: 100,
        margin: 160,
        backgroundColor: '#FFFFFF',
        },
});

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'likes';
};
const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#FFFFFF');

  const onPressHandler = () => {
    const text = randomHex();
    setCount(count + 1);
    setText(`${count}`);
    setColor(text);
  };
  const operation = useMemo(randomHex, [color]);

  const onPressHandlerSecond = () => {
    const text = operation;

    setCount(count + 1);
    setText(`${count}`);
    setColor(text);
  };

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Text>{text}</Text>

        <TouchableOpacity style={styles.button} onPress={onPressHandler} />
        <TouchableOpacity
          style={styles.button}
          onPress={onPressHandlerSecond}
        />
        <TouchableOpacity
          style={[styles.box, {backgroundColor: color}]}
        />
      </ScrollView>
    </View>
  );
};

export default Lab3;
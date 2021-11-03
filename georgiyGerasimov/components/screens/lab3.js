import React, {useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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

  const onPressHandler = () => {
    const text = expensiveFunction();
    setCount(count + 1);
    setText(`${count} ${text}`);
  };
  const operation = useMemo(expensiveFunction, []);

  const onPressHandlerSecond = () => {
    const text = operation;

    setCount(count + 1);
    setText(`${count} ${text}`);
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
      </ScrollView>
    </View>
  );
};

export default Lab3;

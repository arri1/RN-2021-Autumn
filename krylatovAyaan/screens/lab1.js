import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Lab1 = () => {
  const [count, setCount] = useState(0);
  var [color, setColor] = useState('#FFBA73');

  const changeColor = () => {
    if (count === 0) {
      setColor('#F13C73');
    }
    if (count === 1) {
      setColor('#476DD5');
    }
    if (count === 2) {
      setCount(count - 3);
      setColor('#FFBA73');
    }
  };

  const onPressIvent = () => {
    changeColor();
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The truth is that there is no button</Text>
      <TouchableOpacity
        style={[styles.button1, {backgroundColor: color}]}
        title="Click me!"
        onPress={onPressIvent}>
        <Text style={styles.buttontext}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 100,
    height: 32,
    borderRadius: 15,
  },
  buttontext: {
    top: 5,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 12,
    left: 110,
    position: 'absolute',
    top: 230,
  },
});
export default Lab1;

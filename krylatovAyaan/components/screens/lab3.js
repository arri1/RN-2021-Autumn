import React, {useState, useMemo} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [color1, setColor1] = useState('#FFBA73');
  const [color2, setColor2] = useState('#FFBA73');
  const changeColor = () => {
    if (count === 0) {
      setColor1('#F13C73');
    }
    if (count === 1) {
      setColor1('#476DD5');
    }
    if (count === 2) {
      setColor1('#FFBA73');
    }
    if (count === 3) {
      setCount(count - 3);
      setColor1('#FFBA73');
    }
  };
  const changeColor2 = () => {
    if (num === 0) {
      setColor2('#F13C73');
    }
    if (num === 1) {
      setColor2('#476DD5');
    }
    if (num === 2) {
      setColor2('#FFBA73');
    }
    if (num === 3) {
      setNum(num - 3);
      setColor2('#FFBA73');
    }
  };

  const deley = () => {
    let i = 0;
    while (i < 6000000) {
      i++;
    }
    return true;
  };

  const mdel = useMemo(() => deley, []);
  const onPressSimpleButton = () => {
    deley();
    setCount(count + 1);
    changeColor();
  };

  const onPressMemoButton = () => {
    mdel;
    setNum(num + 1);
    changeColor2();
  };
  return (
    <View>
      <View style={[{flexDirection: 'row'}]}>
        <Text style={styles.text1}>Without useMemo</Text>
        <Text style={styles.text2}>With useMemo</Text>
      </View>
      <TouchableOpacity
        style={[styles.button1, {backgroundColor: color1}]}
        title="Click me!"
        onPress={onPressSimpleButton}>
        <Text style={styles.buttontext}>Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button2, {backgroundColor: color2}]}
        title="click me"
        onPress={onPressMemoButton}>
        <Text style={styles.buttontext}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button1: {
    position: 'absolute',
    width: 100,
    height: 32,
    top: 274,
    left: 50,
    borderRadius: 15,
  },
  button2: {
    position: 'absolute',
    width: 100,
    height: 32,
    top: 274,
    right: 50,
    borderRadius: 15,
  },
  text1: {
    height: 14,
    top: 249,
    left: 50,
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  text2: {
    width: 90,
    height: 14,
    top: 249,
    left: 173,
    fontFamily: 'Roboto',
    fontSize: 12,
  },
  buttontext: {
    top: 5,
    textAlign: 'center',
  },
});
export default Lab3;

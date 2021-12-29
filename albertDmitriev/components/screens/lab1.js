import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Lab1 = ({route}) => {
  const [bgColor, setBgColor] = useState('');
  const changeBgColor = () => {
    setBgColor(
      '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase(),
    );
  };
  return (
    <View style={[styles.mainBlock, {backgroundColor: bgColor}]}>
      <Button title="Нажми, чтобы изменить цвет" onPress={changeBgColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab1;

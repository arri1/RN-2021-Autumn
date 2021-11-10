import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const CheckButton = (props) => {
  const [checked, setChecked] = useState(false)
  const { aStyle = {} } = props;

  useEffect(()=>{styles.checked},[checked])
  return (
    <View style={aStyle}>
      <Pressable 
        style={[styles.default, checked ? styles.checked : styles.unchecked]} 
        onPress={() => setChecked(!checked)}>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    width: 34.91,
    height: 34.91,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    borderWidth: 5.81,
    backgroundColor: '#5E5E5E',
  },
  checked: {
    borderColor: '#9BFF82',
  },
  unchecked: {
    borderColor: '#82D2FF',
  }
})

export default CheckButton
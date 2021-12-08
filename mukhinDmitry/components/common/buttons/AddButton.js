import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const AddButton = (props) => {
  const { aStyle, onPress, title = '+' } = props;
  return (
    <View style={aStyle}>
      <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 69.8,
    height: 69.8,
    borderRadius: 39.9,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: '#82D2FF',
  },
  text: {
    marginTop: 8,
    lineHeight: 56,
    fontSize: 56,
    color: 'white',
  },
});

export default AddButton
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
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: '#82D2FF',
    height: 46.54,
    width: 369.45,
    marginTop: 11.63,
    marginLeft: 11.63,
    borderRadius: 8.72,
    padding: 5.81,
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
});

export default AddButton
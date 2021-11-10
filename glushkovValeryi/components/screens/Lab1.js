import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import StyledButton from "../common/StyledButton";

const Lab1 = () => {
  const [isPresed, setPressed] = useState(false);

  return (
    <SafeAreaView>
      <View style = {styles.content}>
        <StyledButton
          text = 'Press On Me'
          style = {styles.button} 
          onPress = {() => setPressed(!isPresed)}
        />
        {!!isPresed && (<View style = {styles.rectangle} />)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#D7FCD4',
    color: '#000000',
    width: 360,
    height: 50
  },
  content: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#545454',
    alignItems: 'center'
  },
  rectangle: {
    width: '90%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: '#B6CCA1',
    alignItems: 'center'
  }
});

export default Lab1;
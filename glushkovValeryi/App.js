import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import StyledButton from "./components/StyledButton";

const App = () => {
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
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#ff8000',
    width: 300,
    height: 50
  },
  content: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    alignItems: 'center'
  },
  rectangle: {
    width: '80%',
    height: '50%',
    backgroundColor: '#ff8000',
    alignItems: 'center'
  }
});

export default App;
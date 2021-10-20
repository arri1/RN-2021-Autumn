import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Lab1: React.FC = () => {
  const [darkTheme] = useState('#000');
  const [lightTheme] = useState('#FFF');
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkThemeOn ? darkTheme : lightTheme,
    },
    button: {
      borderRadius: 10,
      width: '50%',
      height: 30,
      backgroundColor: isDarkThemeOn ? darkTheme : lightTheme,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isDarkThemeOn ? lightTheme : darkTheme,
    },
    buttonText: {
      color: isDarkThemeOn ? lightTheme : darkTheme,
    },
  });

  const toggleDarkMode = () => {
    console.log(!isDarkThemeOn);
    setIsDarkThemeOn(!isDarkThemeOn);
  };

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleDarkMode}>
          <Text style={styles.buttonText}>Click on me</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Lab1;

import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    width: '50%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
})

const Lab1: React.FC = () => {
  const [darkTheme] = useState('#000')
  const [lightTheme] = useState('#FFF')
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkThemeOn(!isDarkThemeOn)
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: isDarkThemeOn ? darkTheme : lightTheme}]}>
        <TouchableOpacity style={[
          styles.button, {backgroundColor: isDarkThemeOn ? darkTheme : lightTheme, borderColor: isDarkThemeOn ? lightTheme : darkTheme}]} onPress={toggleDarkMode}>
          <Text style={{color: isDarkThemeOn ? lightTheme : darkTheme}}>Click on me</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Lab1

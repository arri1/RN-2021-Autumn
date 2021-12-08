import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/routers/tabs';

const App = () => {

  const [color, setColor] = useState('#2E1F99');

  return (
    <SafeAreaView style={styles.main}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#8EDFDD',
  },

  circle: {
    width: 300,
    height: 300,        
    borderRadius: 300,
    marginVertical: 120,
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
 },

  colorCodeBox: {
    backgroundColor: '#17A326',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 22, 
  },

});

export default App;
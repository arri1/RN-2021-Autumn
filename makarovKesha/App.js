import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const App = () => {

  const [color, setColor] = useState('#2E1F99');

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>

        <TouchableOpacity
          style={[ styles.circle, {backgroundColor: color} ]}
          onPress={() => setColor( '#' + Math.floor(Math.random()*16581375).toString(16) )}>
        </TouchableOpacity>

        <View style={styles.colorCodeBox}>
          <Text style = {[styles.mainText, {textTransform: 'uppercase'}]}>{color}</Text>
        </View>
      </ScrollView>
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
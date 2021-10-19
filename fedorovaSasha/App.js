import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const App = () => {
  const [color1, setColor1] = useState('#5CBDDB');
  const [color2, setColor2] = useState('#C446DB');
  const [size, setSize] = useState(26);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={[styles.text, {fontSize: size}]}>
            Какой-то текст ....
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color1}]}
          onPress={() => {
            setColor1('#98DB46');
            setColor2('#C75CDB');
            setSize(36);
          }}>
          <Text>Increase font size</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color2}]}
          onPress={() => {
            setColor1('#C75CDB');
            setColor2('#98DB46');
            setSize(16);
          }}>
          <Text>Reduce font size</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E6AF77',
  },
  box: {
    margin: 15,
  },
  text: {
    fontSize: 16,
  },
  countButton: {
    backgroundColor: '#5CBDDB',
    margin: 15,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

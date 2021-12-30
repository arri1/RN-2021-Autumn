import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const Lab1 = () => {
  const [color1, setColor1] = useState('#C27E5D');
  const [color2, setColor2] = useState('#C27E5D');
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
            setColor1('#8F401A');
            setColor2('#78C25D');
            setSize(size + 3);
          }}>
          <Text style={styles.textButton}>Increase font size</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color2}]}
          onPress={() => {
            setColor1('#78C25D');
            setColor2('#8F401A');
            setSize(size - 3);
          }}>
          <Text style={styles.textButton}>Reduce font size</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  box: {
    margin: 15,
  },
  text: {
    color: '#8F401A',
  },
  textButton: {
    color: '#ffffff',
    fontSize: 22,
  },
  countButton: {
    margin: 15,
    borderRadius: 30,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab1;

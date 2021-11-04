import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const lab1 = () => {
  const [color1, setColor1] = useState('#98DB46');
  const [color2, setColor2] = useState('#FFA500');
  const [color3, setColor3] = useState('#9E2D1E');
  const [size, setSize] = useState(26);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={[styles.text, {fontSize: size}]}>
            Добро пожаловать
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color1}]}
          onPress={() => {
            setColor1('#98DB46');
            setColor2('#FFA500'); 
            setSize(36);
          }}>
          <Text>Кнопка №1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color2}]}
          onPress={() => {
            setColor1('#FFA500');
            setColor2('#98DB46');
            setSize(36);
          }}>
          <Text>Кнопка №2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.countButton, {backgroundColor: color3}]}
          onPress={() => {
            setColor3('#98DB46');
            setColor1('#FFFF00');
            setSize(36);
          }}>
          <Text>Кнопка №3</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  box: {
    margin: 20,
  },
  text: {
    fontSize: 16,
  },
  countButton: {
    backgroundColor: '#5CBDDB',
    margin: 25,
    borderRadius: 100,
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default lab1;
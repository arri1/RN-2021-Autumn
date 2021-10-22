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
  const [color, setColor] = useState('#FFFFFF');

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <TouchableOpacity
          style={[styles.colorBox, {backgroundColor: color}]}
          onPress={() => setColor('#FFFFFF')}></TouchableOpacity>

        <View style={styles.colorCodeBox}>
          <Text style={[styles.mainText, {textTransform: 'uppercase'}]}>
            {color}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.colorizeButton}
          onPress={() =>
            setColor('#' + Math.floor(Math.random() * 16581375).toString(16))
          }>
          <Text style={styles.mainText}>Generate color</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#A9C6D9',
  },

  colorBox: {
    height: 280,
    margin: 30,
    marginTop: 25,
    borderRadius: 10,
  },

  colorCodeBox: {
    backgroundColor: '#E9F2C9',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorizeButton: {
    backgroundColor: '#BFA584',
    margin: 15,
    borderRadius: 10,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 18,
  },
});

export default Lab1;

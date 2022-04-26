import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default Main = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  item: {
    alignSelf: 'center',
    marginTop: 130,
    width: 323,
    height: 100,
    backgroundColor: '#E6E6FA',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderColor: '#444586',
    borderWidth: 2,
  },
  text: {
    fontSize: 30,
    color: 'black'
  },
});
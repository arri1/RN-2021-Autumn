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
    backgroundColor: '#7B47E9',
  },
  item: {
    alignSelf: 'center',
    marginTop: 130,
    width: 323,
    height: 100,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 30,
  },
});

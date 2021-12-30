import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default Main = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Bxo9')}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('registration')}>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#2F42B2',
  },
  item: {
    alignSelf: 'center',
    marginTop: 160,
    width: 323,
    height: 100,
    backgroundColor: '#5AC8FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});

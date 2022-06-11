import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../apollo/gqls/mutations';

const Lab5 = () => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [notGet, setNotGet] = useState(true);

  const getItems = async () => {
    if (notGet) {
      onChangeLogin(await AsyncStorage.getItem('login'));
      onChangePassword(await AsyncStorage.getItem('password'));
      onChangeName(await AsyncStorage.getItem('name'));
      onChangeGroup(await AsyncStorage.getItem('group'));
      setNotGet(false);
    }
  };

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({updateUser}) => {
      ToastAndroid.show('Данные сохранены', ToastAndroid.SHORT);
    },
    onError: ({message}) => {
      console.log(message);
    },
  });

  const onUpdate = () => {
    updateUser({
      variables: {
        data: {
          group: {set: group},
          name: {set: name},
          password: {set: password},
          login: {set: login},
        },
      },
    });
  };

  getItems();
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder={'Логин'}
          style={[styles.inputText, styles.text]}
        />
        <TextInput
          onChangeText={onChangeName}
          value={name}
          placeholder={'Имя'}
          style={[styles.inputText, styles.text]}
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder={'Пароль'}
          style={[styles.inputText, styles.text]}
        />
        <TextInput
          onChangeText={onChangeGroup}
          value={group}
          placeholder={'Группа'}
          style={[styles.inputText, styles.text]}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onUpdate}>
        <Text style={styles.textButton}>Сохранить</Text>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#D2E0BF',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputText: {
    width: 360,
    height: 50,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#D4CBB3', 
    paddingLeft: 20,
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  button: {
    width: 200,
    height: 40,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: '#D1A7A0',
    alignItems: 'center',
  },
});

export default Lab5;
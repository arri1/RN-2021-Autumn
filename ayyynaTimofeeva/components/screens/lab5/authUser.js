import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { AUTH, UPDATE_USER } from '../../apollo/mutations';

const AuthUser = ({ navigation }) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({ authUser }) => {
      setAuthorized(true);
      onChangeGroup(authUser.user.group);
      onChangeName(authUser.user.name);
      onChangeLogin(authUser.user.login);
      await AsyncStorage.setItem('token', authUser.token);
      if (authUser.user.group != null)
        await AsyncStorage.setItem('group', authUser.user.group);
      else await AsyncStorage.setItem('group', '');
      await AsyncStorage.setItem('name', authUser.user.name);
      await AsyncStorage.setItem('login', authUser.user.login);
      await AsyncStorage.setItem('password', password);
      navigation.replace('TabNavigator');
    },
    onError: ({ message }) => {
      console.log(message);
      if (message === 'Incorrect password') {
        ToastAndroid.show('Неверный пароль', ToastAndroid.SHORT);
        return null;
      }
      ToastAndroid.show('Ошибка', ToastAndroid.SHORT);
    },
  });
  const onAuthorization = () => {
    authorization({
      variables: { login, password },
    });
  };
  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({ updateUser }) => {
      ToastAndroid.show('Данные сохранены', ToastAndroid.SHORT);
    },
    onError: ({ message }) => {
      console.log(message);
    },
  });
  const onUpdate = () => {
    updateUser({
      variables: {
        data: {
          group: { set: group },
          name: { set: name },
          password: { set: password },
          login: { set: login },
        },
      },
    });
  };

  return (
    <View style={styles.main}>
      {!authorized && (
        <View style={styles.viewBox}>
          <Text style={styles.title}></Text>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Логин:  </Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text, { width: '71%' }]}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Пароль:</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              style={[styles.inputText, styles.text]}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onAuthorization}>
            <Text style={styles.text}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.push('Registration');
            }}>
            <Text style={styles.text}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#AC99C0',
    justifyContent: 'center'
  },
  viewBox: {
    margin: 15,
    alignItems: 'center'
  },
  viewInput: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    width: '70%',
    paddingLeft: 15,
    borderRadius: 5,
    marginLeft: 15,
    backgroundColor: '#9D88B4',
    alignContent: 'flex-start',
  },
  labelText: {
    fontSize: 15,
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#9D88B4',
    margin: 5,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    top: 10,
    width: 130
  },
  button2: {
    backgroundColor: '#9D88B4',
    margin: 10,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    top: 10,
    width: 130
  }
});

export default AuthUser;
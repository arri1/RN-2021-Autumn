import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text, StyleSheet} from 'react-native';
import {useMutation} from '@apollo/client';
import {AUTH} from '../apollo/gqls/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');
  const [group, onChangeGroup] = useState('');
  const [name, onChangeName] = useState('');

  const [passErr, setPassErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  const validate = () => {
    if (login === '') {
      console.log('Не введено Имя');
      setLoginErr(true);
      return false;
    }
    setLoginErr(false);
    if (password === '') {
      console.log('Не введен пароль');
      setPassErr(true);
      return false;
    }
    setPassErr(false);
    return true;
  };

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
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

      navigation.replace('Tab');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        ToastAndroid.show('Неверный пароль', ToastAndroid.SHORT);
        return null;
      }
      ToastAndroid.show('Что то пошло не так', ToastAndroid.SHORT);
    },
  });

  const onAuthorization = () => {
    if (validate()) {
      authorization({
        variables: {login, password},
      });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Логин"
          style={[
            styles.inputText,
            styles.text,
            loginErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />

        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Пароль"
          style={[
            styles.inputText,
            styles.text,
            passErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#D1A7A0'}]}
        onPress={onAuthorization}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#CE84AD'}]}
        onPress={()=>navigation.replace('SignUp')}>
        <Text style={styles.text}>Регистрация</Text>
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
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 40,
    marginTop: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default SignIn;
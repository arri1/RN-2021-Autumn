import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import { AUTH } from '../../sql/mutations';

const Login = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  
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
      
      navigation.replace('TabNavigator');
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
    authorization({
      variables: {login, password},
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.viewBox}>
        <View style={styles.viewInput}>
          <Text style={styles.labelText}>Логин:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            style={[styles.inputText, styles.text]}
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

        <TouchableOpacity style={styles.regBtn} onPress={()=>navigation.replace('Registration')}>
          <Text style={styles.text}>Регистрация</Text>
        </TouchableOpacity>
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#BCEEEB',
  },
  viewBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput: {
    marginTop: 15,
  },
  inputText: {
    width: 300,
    borderRadius: 10,  
    padding: 10,
    backgroundColor: '#64C9FA',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#95D133',
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  regBtn: {
    backgroundColor: '#248FE0',
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  SignOutBtn: {
    position: 'absolute',
    left: 350,
    top: 5,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 50,
  },
});

export default Login;
import React, {useState} from 'react';
import {
  Text, View, Animated, TouchableOpacity, TextInput
} from 'react-native';
import styles from '../styles/styles';
import { useMutation } from '@apollo/client';
import { AUTH } from '../gql/mutations';

import { getStatus, setStatus } from '../store/auth';


const signIn = ({navigation}) => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [log] = useMutation(AUTH, {
    onCompleted: ({authUser}) => {
      navigation.replace('TabNavigator');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    console.log(login);
    log({
      variables: {login, password},
    });
  };

  const changePage = () => {
    navigation.replace('Signup');
  }

  return (
    <View style={
      [styles.container, { flex: 1, justifyContent: 'center',}]
    }
    >
        <View style={{alignItems: 'center'}}>
          <TextInput onChangeText={text => setLogin(text)} placeholder='LOGIN' placeholderTextColor="#fff" style={[styles.textArea, {marginVertical: 5}]}/>
          <TextInput onChangeText={text => setPassword(text)} placeholder='PASSWORD' placeholderTextColor="#fff" style={[styles.textArea, {marginVertical: 5}]}/>
        <TouchableOpacity onPress={submit} style={[styles.button, {marginTop: 5}]}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <Text style={[styles.boxTextStyle, {color: 'black', marginTop: 50}]}>
          Do not have any account?
        </Text>
        <TouchableOpacity onPress={changePage} style={[styles.button, {marginTop: 10}]}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
        </View>
      </View>
      );
};

export default signIn;

import React from 'react';
import {
  Text, View, TouchableOpacity, TextInput,
} from 'react-native';
import { useMutation } from '@apollo/client';
import styles from '../styles/styles';
import { AUTH } from '../gql/mutations';

import { auth } from '../store/tasks';

const signIn = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [log] = useMutation(AUTH, {
    onCompleted: ({ authUser }) => {
      auth.dispatch({ type: 'setUser', login});
      navigation.replace('TabNavigator');
    },
    onError: ({ message }) => {
      console.log(message);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    log({
      variables: { login, password },
    });
  };

  return (
    <View style={
      [styles.container, { flex: 1, justifyContent: 'center' }]
    }
    >
      <View>
        <Text style={[styles.boxTextStyle, { textAlign: 'center', fontSize: 30, marginBottom: 15 }]}>APPXX</Text>
        <TextInput onChangeText={(text) => setLogin(text)} placeholder="LOGIN" placeholderTextColor="#fff" style={[styles.textArea, { marginVertical: 5 }]} />
        <TextInput onChangeText={(text) => setPassword(text)} placeholder="PASSWORD" placeholderTextColor="#fff" style={[styles.textArea, { marginVertical: 5 }]} />
        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={submit} style={[styles.button]}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace('Signup')} style={styles.button}>
            <Text style={styles.buttonText}>CREATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default signIn;

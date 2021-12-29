import React, {useState,useEffect} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {USER} from '../gqls/user/query';
import {SIGN_IN, SIGN_UP} from '../gqls/user/mutations';
import {useDispatch} from 'react-redux';
import {useMutation} from '@apollo/client';
import { AsyncStorage } from 'react-native';

const Lab51 = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const [user] = useMutation(SIGN_IN, {
    onCompleted: async ({authUser}) => {
      dispatch({type: 'SIGN_IN', signedIn: true});
      await AsyncStorage.setItem('token', authUser.token);
      props.navigation.navigate('Main');
    },
    onError: ({message}) => {
      setMessage(message);
    },
  });

  const signIn = () => {
    if (login != '' && password != '') {
      user({
        variables: {
          data: {
            login,
            password,
          },
        },
      });
    }
  };

  const [newUser] = useMutation(SIGN_UP, {
    onCompleted: ({registerUser}) => {},
    onError: ({message}) => {
      if (message === 'Unique constraint failed on the fields: (`login`)')
        setMessage('Login is already used');
    },
  });

  const createUser = () => {
    newUser({
      variables: {
        data: {
          password,
          login,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputField, {marginTop: 200}]}>
        <TextInput
          style={styles.text}
          placeholder="Login"
          onChangeText={text => setLogin(text)}>
        </TextInput>
      </View>
      <View style={styles.inputField}>
        <TextInput
          style={styles.text}
          placeholder="Password"
          onChangeText={text => setPassword(text)}>
        </TextInput>
      </View>
      <TouchableOpacity style={[styles.button, {marginTop:30}]} onPress={signIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={createUser}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: '100%'
  },
  text: {
    fontSize: 19,
    color: '#000000',
    opacity: 1
  },
  inputField: {
    alignSelf: 'center',
    width: 335,
    minHeight: 50,
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#BB86FC',
    marginTop: 10,
    marginBottom: 0,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 19,
    color: '#000000'
  }
});

export default Lab51;
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {USER} from '../gqls/user/query';
import {SIGN_IN, SIGN_UP} from '../gqls/user/mutations';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const Lab5 = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const apollo = useApolloClient();

  const [user] = useMutation(SIGN_IN, {
    onCompleted: ({authUser}) => {
      apollo.writeQuery({query: USER, data: {user: authUser.user}});
      props.navigation.navigate('Main');
    },
  });

  const signIn = () => {
    user({
      variables: {
        data: {
          login,
          password,
        },
      },
    });
  };

  const [newUser] = useMutation(SIGN_UP, {
    onCompleted: ({registerUser}) => {},
    onError: ({message}) => {
      console.log(message);
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

export default Lab5;
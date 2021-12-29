import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {AUTH} from '../gqls/Mutations';

const Login = props => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const {setItem} = useAsyncStorage('token');
  const [state, setState] = useState(0);

  const [auth, {loading}] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      await setItem(authUser.token);
      setState(1);
      console.log('Login succeded');
      console.log(authUser);
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'GraphQL error: Incorrect password') {
        console.log('Incorrect password');
        return null;
      }
      console.log('Something went wrong');
    },
  });

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login');
      return false;
    }
    if (password === '') {
      console.log('Null password');
      return false;
    }
    return true;
  };

  if (loading)
    return (
      <SafeAreaView style={styles.Main}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333" />
      </SafeAreaView>
    );

  const onAuth = () => {
    if (isDataCorrect())
      auth({
        variables: {
          login,
          password,
        },
      });
  };

  if (state) {
    return (
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.buttonTextOpen}>Добро пожаловать {login}!</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.main}>
        <View>
          <Text style={styles.textOpen}>Вход</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setLogin(text)}
            value={login}
            placeholder="Login"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
          />
          <Pressable
            onPress={() => {
              onAuth();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Войти</Text>
          </Pressable>
          <Pressable
            onPress={() => props.navigation.navigate('Sign')}
            style={styles.buttonOpen}>
            <Text style={styles.buttonText}>Регистрация</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 70,
    height: 46,
    width: 200,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonOpen: {
    marginTop: 10,
    marginLeft: 70,
    height: 46,
    width: 200,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    lineHeight: 33,
    height: 33,
    marginLeft: 6,
    color: '#000000',
    fontSize: 16,
  },
  textOpen: {
    lineHeight: 33,
    height: 33,
    marginLeft: 6,
    color: '#FFFFFF',
    marginLeft: 140,
    marginBottom: 20,
    fontSize: 24,
  },
  buttonTextOpen: {
    lineHeight: 33,
    height: 33,
    marginLeft: 6,
    color: '#FFFFFF',
    fontSize: 16,
  },
  input: {
    height: 45,
    width: 320,
    borderRadius: 10,
    marginTop: 11,
    marginLeft: 11,
    padding: 6,
    paddingLeft: 11,
    lineHeight: 35,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 16,
  },
  main: {
    backgroundColor: '#000000',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;

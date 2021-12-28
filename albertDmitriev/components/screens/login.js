import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {AUTH} from '../gqls/users/mutations';
import {useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [group, setGroup] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      console.log('Authorization OK');
      setAuthorized(true);
      setGroup(authUser.user.group);
      setName(authUser.user.name);
      await AsyncStorage.setItem('token', authUser.token);
      console.log(authUser.token);
      navigation.replace('TabNavigator');
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'GraphQL error: Incorrect password') {
        showMessage({
          message: 'Неверен пароль',
          type: 'danger',
        });
        return null;
      }
      showMessage({
        message: 'Что то пошло не так',
        type: 'danger',
      });
    },
  });

  const onSignInBtnClicked = () => {
    authorization({
      variables: {login, password},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login page</Text>
      <TextInput
        style={styles.inputField}
        value={login}
        onChangeText={text => setLogin(text)}
        placeholder="Введите логин"
      />
      <TextInput
        style={styles.inputField}
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        placeholder="Введите пароль"
      />
      <TouchableOpacity style={styles.logBtn} onPress={onSignInBtnClicked}>
        <Text>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{textDecorationLine: 'underline', marginTop: 50}}>
          Нет аккаунта? Зарегистрируйтесь
        </Text>
      </TouchableOpacity>
      {authorized ? (
        <Text style={{color: 'green'}}>Вход выполнен</Text>
      ) : (
        <Text>Вход не выполнен</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, margin: 15},
  logBtn: {
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  inputField: {
    backgroundColor: 'white',
    width: 200,
    marginVertical: 10,
  },
});

export default Login;

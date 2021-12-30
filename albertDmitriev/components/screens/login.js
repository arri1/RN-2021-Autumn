import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Alert,
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
      console.log(message + '1111111111');
      if (message === 'Incorrect password') {
        Alert.alert('Ошибка', 'Неверный пароль', [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
        return null;
      }
      Alert.alert('Ошибка', 'Что-то пошло не так', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    },
  });

  const onSignInBtnClicked = () => {
    authorization({
      variables: {login, password},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginForm}>
        <Text style={styles.title}>Авторизация</Text>
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
          <Text style={styles.logBtnText}>Войти</Text>
        </TouchableOpacity>
      </View>
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
  loginForm: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 26,
  },
  logBtn: {
    backgroundColor: '#3B71F3',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  logBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    backgroundColor: '#E6F5FF',
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Login;

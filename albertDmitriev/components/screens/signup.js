import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {REG} from '../gqls/users/mutations';
import {useMutation} from '@apollo/client';

const Signup = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('test');

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      setLogin(null);
      setPassword(null);
      setConfirmPassword(null);
      Alert.alert('Успешно', 'Пользователь зарегистрирован', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    },
  });

  const createUser = () => {
    registration({
      variables: {login, password, name},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Signup page</Text>
      <TextInput
        style={styles.inputField}
        value={login}
        onChangeText={text => {
          setLogin(text);
        }}
        placeholder="Введите логин"
      />
      <TextInput
        style={styles.inputField}
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        placeholder="Введите пароль"
      />
      <TextInput
        style={styles.inputField}
        value={confirmPassword}
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Повторите пароль"
      />
      <TouchableOpacity style={styles.logBtn} onPress={createUser}>
        <Text>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, marginTop: 20}}
        onPress={() => navigation.goBack()}>
        <Text>Назад</Text>
      </TouchableOpacity>
      <Text style={styles.errorMsg}>{errorMsg}</Text>
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
  errorMsg: {
    color: 'red',
    marginTop: 15,
  },
});

export default Signup;

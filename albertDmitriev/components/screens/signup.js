import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  View,
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
      navigation.goBack();
      Alert.alert('Успешно', 'Пользователь зарегистрирован', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Unique constraint failed on the fields: (`login`)') {
        Alert.alert('Ошибка', 'Пользователь с таким логином', [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
        return null;
      }
    },
  });

  const showAlert = msg =>
    Alert.alert('Ошибка', msg, [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]);

  const passValidate = () => {
    if (password === '') {
      showAlert('Введите пароль');
      return false;
    }
    if (password !== confirmPassword) {
      showAlert('Пароли не совпадают');
      return false;
    }
    return true;
  };

  const createUser = () => {
    if (!passValidate()) {
      return null;
    }
    registration({
      variables: {login, password, name},
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.regForm}>
        <Text style={styles.title}>Регистрация</Text>
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
        <TouchableOpacity style={styles.regBtn} onPress={createUser}>
          <Text style={styles.regBtnText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, margin: 15},
  regForm: {
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
  regBtn: {
    backgroundColor: '#3B71F3',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    padding: 15,
    borderRadius: 5,
    width: '80%',
  },
  regBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    backgroundColor: '#E6F5FF',
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
  },
  errorMsg: {
    color: 'red',
    marginTop: 15,
  },
});

export default Signup;

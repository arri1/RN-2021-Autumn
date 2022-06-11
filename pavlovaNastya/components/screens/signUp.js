import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View, Text, StyleSheet} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../apollo/gqls/mutations';

const SignUpPage = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [name, onChangeName] = useState('');
  const [password, onChangePassword] = useState('');
  const [checkpassword, onChangeCheckPassword] = useState('');
  const [passErr, setPassErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      navigation.navigate('SignIn');
      console.log('registration OK');
    },
  });

  const validate = () => {
    if (name === '') {
      console.log('Не введено имя');
      setNameErr(true);
      return false;
    }
    setNameErr(false);
    if (login === '') {
        console.log('Не введен логин');
        setLoginErr(true);
        return false;
      }
    setLoginErr(false);
    if (password === '') {
      console.log('Не введен пароль');
      setPassErr(true);
      return false;
    }
    if (checkpassword === '') {
      console.log('Повторите пароль');
      setPassErr(true);
      return false;
    }
    if (password !== checkpassword) {
      console.log('Пароли не совпадают');
      setPassErr(true);
      return false;
    }
    setPassErr(false);
    return true;
  };

  const onRegistration = () => {
    if (validate()) {
      registration({
        variables: {login, name, password},
      });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Логин"
          style={[
            styles.inputText, 
            styles.text,
            loginErr ? {backgroundColor: '#f68379'} : undefined,
        ]}
        />

        <TextInput
          onChangeText={onChangeName}
          value={name}
          placeholder="Имя"
          style={[
            styles.inputText,
            styles.text,
            nameErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />

        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Пароль"
          style={[
            styles.inputText,
            styles.text,
            passErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />

        <TextInput
          onChangeText={onChangeCheckPassword}
          value={checkpassword}
          placeholder="Повторите пароль"
          style={[
            styles.inputText,
            styles.text,
            passErr ? {backgroundColor: '#f68379'} : undefined,
          ]}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onRegistration}>
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
      height: '100%',
      backgroundColor: '#D2E0BF',
      justifyContent: 'center',
      alignItems: 'center',    
    },
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    inputText: {
      width: 300,
      height: 50,
      marginTop: 30,
      borderRadius: 10,
      backgroundColor: '#D4CBB3', 
      paddingLeft: 20,
    },
    text:{
      fontFamily: 'Roboto',
      fontSize: 16,
      color: 'black',
      marginBottom: 15,
    },
    button: {
      width: 200,
      height: 40,
      marginTop: 50,
      borderRadius: 10,
      backgroundColor: '#D1A7A0',
      alignItems: 'center',
    },
});

export default SignUpPage;
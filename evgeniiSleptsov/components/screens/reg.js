import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG_USER} from '../grphql/mutations';

const Reg = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [registrated, setRegistrated] = useState(false);

  const [registration] = useMutation(REG_USER, {
    onCompleted: () => {
      setRegistrated(true);
    },
  });

  const onRegistration = () => {
    registration({
      variables: {login, password, name},
    });
  };
  return (
    <View style={styles.main}>
      {!registrated && (
        <View style={styles.inputField}>
          <Text style={[styles.labelText, {color: 'white'}]}>Имя:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            style={[styles.inputText, styles.text]}
          />

          <Text style={[styles.labelText, {color: 'white'}]}>Логин:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            style={[styles.inputText, styles.text]}
          />

          <Text style={[styles.labelText, {color: 'white'}]}>Пароль:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={onRegistration}>
            <Text style={[styles.text, {color: 'white'}]}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={[styles.main, {alignItems: 'center'}]}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
            }}>
            {name}, регистрация прошла успешно!
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#2F42B2',
    justifyContent: 'center',
  },

  inputText: {
    color: 'white',
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    margin: 20,
  },
  inputField: {
    backgroundColor: '#2F42B2',
    borderRadius: 20,
    margin: 20,
  },
  labelText: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: 20,
  },

  text: {
    fontSize: 16,
  },

  signUpButton: {
    backgroundColor: '#5AC8FA',
    margin: 20,
    borderRadius: 10,
    borderColor: '#A8452F',
    padding: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
});

export default Reg;

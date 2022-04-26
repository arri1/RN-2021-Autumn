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
          <Text style={styles.labelText}>Имя:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Логин:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Пароль:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={onRegistration}>
            <Text style={[styles.text, {color: '#FFFFFF'}]}>
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={[styles.main, {alignItems: 'center', backgroundColor:'#E6E6FA',}]}>
          <Text
            style={{
              fontSize: 30,
              color: 'black' 
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },

  inputText: {
    borderColor: '#444586',
    borderRadius: 5,
    borderWidth: 1,
    margin: 20,
  },
  inputField: {
    backgroundColor: '#E6E6FA',
    borderRadius: 0,
    margin: 20,
    borderColor: '#444586',
    borderWidth: 2,
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
    backgroundColor: '#444586',
    margin: 20,
    borderRadius: 0,
    borderColor: '#444586',
    padding: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
});

export default Reg;
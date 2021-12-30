import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../../sql/mutations';

const Registration = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [registrated, setRegistrated] = useState(false);

  const [registration] = useMutation(REG, {
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
        <View style={styles.viewBox}>
          <View style={styles.viewInput}>
          <Text style={styles.labelText}>Имя:</Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              style={[styles.inputText, styles.text]}
            />
          </View>
          <View style={styles.viewInput}>
          <Text style={styles.labelText}>Логин:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <View style={styles.viewInput}>
          <Text style={styles.labelText}>Пароль:</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onRegistration}>
            <Text style={styles.text}>Зарегистрироваться</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.replace('Login')}>
            <Text style={styles.text}>Назад</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.labelText}>
            {name}, вы успешно зарегистрировались!
          </Text>
          <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.replace('Login')}>
            <Text style={styles.text}>Назад</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#BCEEEB',
    marginBottom: 80,
  },
  viewBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput: {
    marginTop: 15,

  },
  inputText: {
    width: 300,
    borderRadius: 10, 
    padding: 10, 
    backgroundColor: '#64C9FA',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#95D133',
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: '#248FE0',
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
});

export default Registration;
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useMutation } from '@apollo/client';
import { REG } from '../../apollo/mutations';
const RegUser = ({ navigation }) => {
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
      variables: { login, password, name },
    });
  };
  return (
    <View style={styles.main}>
      {!registrated && (
        <View style={styles.viewBox}>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Имя:      </Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              style={[styles.inputText, styles.text, { width: '70%' }]}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Логин:   </Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text, { width: '70%' }]}
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push('Authorization');
            }}>
            <Text style={styles.text}>Авторизация</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.labelText}>
            {name}, вы успешно зарегистрировались
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#AC99C0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBox: {
    margin: 15,
    alignItems: 'center'
  },
  viewInput: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    width: '70%',
    paddingLeft: 15,
    borderRadius: 5,
    marginLeft: 15,
    backgroundColor: '#9D88B4',
  },
  labelText: {
    fontSize: 15,
    color: 'white',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#9D88B4',
    borderRadius: 5,
    padding: 5,
    margin: 10,
    alignItems: 'center',
    width: 180
  },
});

export default RegUser;
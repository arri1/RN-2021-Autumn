import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../apollo/mutations';

const Lab5 = () => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [notGet, setNotGet] = useState(true);


  const getItems = async () => {
    if (notGet) {
      onChangeLogin(await AsyncStorage.getItem('login'));
      onChangePassword(await AsyncStorage.getItem('password'));
      onChangeName(await AsyncStorage.getItem('name'));
      onChangeGroup(await AsyncStorage.getItem('group'));
      setNotGet(false);
    }
  };

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({ updateUser }) => {
      ToastAndroid.show('Данные сохранены', ToastAndroid.SHORT);
    },
    onError: ({ message }) => {
      console.log(message);
    },
  });

  const onUpdate = () => {
    updateUser({
      variables: {
        data: {
          group: { set: group },
          name: { set: name },
          password: { set: password },
          login: { set: login },
        },
      },
    });
  };
  getItems();
  return (
    <View style={[styles.viewBox]}>
      <Text style={[styles.labelText, { marginTop: 15, textAlign: 'center' }]}>
        Изменение данных
      </Text>
      <View style={styles.viewInput}>
        <Text style={styles.labelText}>Логин:  </Text>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder={'Login'}
          style={[styles.inputText, styles.text, { width: '60%' }]}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.labelText}>Пароль:</Text>
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder={'Password'}
          style={[styles.inputText, styles.text]}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.labelText}>Имя:      </Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          placeholder={'Name'}
          style={[styles.inputText, styles.text, { width: '60%' }]}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.labelText}>Группа:  </Text>
        <TextInput
          onChangeText={onChangeGroup}
          value={group}
          placeholder={'Group'}
          style={[styles.inputText, styles.text, { width: '60%' }]}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onUpdate}>
        <Text style={styles.textButton}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#AC99C0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewBox: {
    height: '100%',
    backgroundColor: '#AC99C0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewInput: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    width: '60%',
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
    fontSize: 16,
    color: 'white',
  },
  textButton: {
    fontSize: 15,
    color: 'white',
  },
  button: {
    backgroundColor: '#9D88B4',
    margin: 15,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    width: 130
  },
});
export default Lab5;
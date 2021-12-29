import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../sql/mutations';

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
    onCompleted: ({updateUser}) => {
      ToastAndroid.show('Данные сохранены', ToastAndroid.SHORT);
    },
    onError: ({message}) => {
      console.log(message);
    },
  });

  const onUpdate = () => {
    updateUser({
      variables: {
        data: {
          group: {set: group},
          name: {set: name},
          password: {set: password},
          login: {set: login},
        },
      },
    });
  };

  getItems();
  return (
    <SafeAreaView style={[styles.main, {backgroundColor: '#BCEEEB'}]}>
      <ScrollView style={[styles.main]}>
        <View style={[styles.viewBox]}>
          <Text style={styles.labelText}>Изменить данные</Text>
          <View style={styles.viewInput}>
          <Text style={styles.labelText}>Логин:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              placeholder={'Login'}
              style={[styles.inputText, styles.text]}
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
          <Text style={styles.labelText}>Имя:</Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              placeholder={'Name'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <View style={styles.viewInput}>
          <Text style={styles.labelText}>Группа:</Text>
            <TextInput
              onChangeText={onChangeGroup}
              value={group}
              placeholder={'Group'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onUpdate}>
            <Text style={styles.textButton}>Сохранить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    width: 380,
    borderRadius: 10,  
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
    width: 380,
    alignItems: 'center',
  },
});

export default Lab5;
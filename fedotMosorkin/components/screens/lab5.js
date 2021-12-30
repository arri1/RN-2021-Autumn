import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  ToastAndroid,
  Alert,
} from 'react-native';
import {GET_USER} from '../grphql/qrs';
import {useMutation, useQuery} from '@apollo/client';
import {UPDATE_USER} from '../grphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Lab5 = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [name, setName] = useState(null);
  const [group, setGroup] = useState(null);
  const [password, setPassword] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [passUpdateMode, setPassUpdateMode] = useState(false);
  const {} = useQuery(GET_USER, {
    onCompleted: async ({user}) => {
      setLogin(user.login);
      setGroup(user.group);
      setName(user.name);
    },
    onError: () => {},
  });

  const [saveUpdate] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      console.log('Изменения сохранены');
    },
    onError: () => {
      showAlert('Произошла ошибка');
    },
  });

  const showAlert = msg =>
    Alert.alert('Ошибка', msg, [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]);

  const emptyEdit = () => {
    if (group === '') {
      ToastAndroid.show('Введите группу', ToastAndroid.SHORT);
      return false;
    }
    if (name === '') {
      ToastAndroid.show('Введите имя', ToastAndroid.SHORT);
      return false;
    }
    if (login === '') {
      ToastAndroid.show('Введите логин', ToastAndroid.SHORT);
      return false;
    }
    return true;
  };

  const emptyPassword = () => {
    if (password === '') {
      ToastAndroid.show('Введите пароль', ToastAndroid.SHORT);
      return false;
    }
    return true;
  };

  const changePass = () => {
    if (!emptyPassword()) {
      return null;
    }
    saveUpdate({
      variables: {
        data: {
          password: {set: password},
        },
      },
    });
    ToastAndroid.show('Пароль изменен', ToastAndroid.SHORT);
    setPassUpdateMode(false);
  };

  const onSave = () => {
    if (!emptyEdit()) {
      return null;
    }
    saveUpdate({
      variables: {
        data: {
          login: {set: login},
          group: {set: group},
          name: {set: name},
        },
      },
    });
    changeMode();
  };

  const changeMode = () => {
    setUpdateMode(!updateMode);
  };

  const logOut = () => {
    AsyncStorage.setItem('group', '');
    AsyncStorage.setItem('name', '');
    AsyncStorage.setItem('login', '');
    AsyncStorage.setItem('password', '');
    AsyncStorage.setItem('token', '');
    navigation.replace('SignIn');
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Профиль</Text>
      {!passUpdateMode && (
        <View>
          {!updateMode && (
            <View style={styles.profileContainer}>
              <View style={styles.profileField}>
                <Text style={styles.profileInfo}>Логин: {login}</Text>
                <Text style={styles.profileInfo}>Имя: {name}</Text>
                <Text style={styles.profileInfo}>Группа: {group}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={changeMode}>
                <Text style={styles.textBtn}>Редактировать</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setPassUpdateMode(!passUpdateMode)}>
                <Text style={styles.textBtn}>Изменить пароль</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {marginTop: 50, backgroundColor: 'brown'}]}
                onPress={logOut}>
                <Text style={styles.textBtn}>Выйти</Text>
              </TouchableOpacity>
            </View>
          )}
          {updateMode && (
            <View>
              <Text style={styles.text}>Логин:</Text>
              <TextInput
                value={login}
                style={styles.textInput}
                placeholder="Введите логин"
                onChangeText={text => setLogin(text)}
              />
              <Text style={styles.text}>Имя:</Text>
              <TextInput
                value={name}
                style={styles.textInput}
                placeholder="введите имя"
                onChangeText={text => setName(text)}
              />
              <Text style={styles.text}>Группа:</Text>
              <TextInput
                value={group}
                style={styles.textInput}
                placeholder="введите группу"
                onChangeText={text => setGroup(text)}
              />
              <TouchableOpacity style={styles.btn} onPress={onSave}>
                <Text style={styles.textBtn}>Сохранить</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setUpdateMode(false)}>
                <Text style={styles.textBtn}>Отмена</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      {passUpdateMode && (
        <View>
          <Text style={styles.text}>Введите новый пароль:</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={changePass}>
            <Text style={styles.textBtn}>Изменить пароль</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setPassUpdateMode(false)}>
            <Text style={styles.textBtn}>Отмена</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7B47E9',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    marginTop: 20,
    color: '#FFFFFF',
  },
  profileContainer: {
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
  },
  profileField: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    paddingTop: 10,
  },
  profileInfo: {
    color: 'black',
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 15,
  },
  textInput: {
    backgroundColor: 'white',
    width: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#000000',
    width: 200,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  textBtn: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Lab5;

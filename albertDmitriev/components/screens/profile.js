import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {USER} from '../gqls/users/queries';
import {useMutation, useQuery} from '@apollo/client';
import {UPDATE_USER} from '../gqls/users/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [name, setName] = useState(null);
  const [group, setGroup] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [passUpdateMode, setPassUpdateMode] = useState(false);
  const {} = useQuery(USER, {
    onCompleted: ({user}) => {
      setLogin(user.login);
      setGroup(user.group);
      setName(user.name);
    },
    onError: () => {},
  });

  const [save] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      console.log('Saved');
    },
    onError: () => {
      showAlert('Что-то пошло не так');
    },
  });

  const showAlert = msg =>
    Alert.alert('Ошибка', msg, [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]);

  const validate = () => {
    if (group === '') {
      showAlert('Введите группу');
      return false;
    }
    if (name === '') {
      showAlert('Введите имя');
      return false;
    }
    if (login === '') {
      showAlert('Введите логин');
      return false;
    }
    return true;
  };

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

  const changePass = () => {
    if (!passValidate()) {
      return null;
    }
    save({
      variables: {
        data: {
          password: {set: password},
        },
      },
    });
    showAlert('Пароль изменен');
    setPassUpdateMode(false);
  };

  const onSave = () => {
    if (!validate()) {
      return null;
    }
    save({
      variables: {
        data: {
          group: {set: group},
          name: {set: name},
          login: {set: login},
        },
      },
    });
    changeMode();
  };

  const changeMode = () => {
    setUpdateMode(!updateMode);
  };

  const logOut = () => {
    setLogin(null);
    setPassword(null);
    setName(null);
    setGroup(null);
    AsyncStorage.setItem('token', '');
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ваш профиль</Text>
      <Image
        style={styles.profileLogo}
        source={require('../../img/icon-user-19.jpg')}
      />
      {!passUpdateMode && (
        <View>
          {!updateMode && (
            <View style={styles.userInfo}>
              <View style={styles.userInfoInner}>
                <Text style={styles.userInfoInnerString}>Логин: {login}</Text>
                <Text style={styles.userInfoInnerString}>Имя: {name}</Text>
                <Text style={styles.userInfoInnerString}>Группа: {group}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={changeMode}>
                <Text style={{color: 'white'}}>Редактировать</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setPassUpdateMode(!passUpdateMode)}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Изменить пароль
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, {marginTop: 50, backgroundColor: 'brown'}]}
                onPress={logOut}>
                <Text style={{color: 'white'}}>Выйти</Text>
              </TouchableOpacity>
            </View>
          )}
          {updateMode && (
            <View>
              <Text>Логин:</Text>
              <TextInput
                value={login}
                style={styles.txtInput}
                placeholder="введите имя"
                onChangeText={text => setLogin(text)}
              />
              <Text>Имя:</Text>
              <TextInput
                value={name}
                style={styles.txtInput}
                placeholder="введите имя"
                onChangeText={text => setName(text)}
              />
              <Text>Группа:</Text>
              <TextInput
                value={group}
                style={styles.txtInput}
                placeholder="введите группу"
                onChangeText={text => setGroup(text)}
              />
              <TouchableOpacity style={styles.btn} onPress={onSave}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Сохранить
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      {passUpdateMode && (
        <View>
          <Text>Введите новый пароль:</Text>
          <TextInput
            style={styles.txtInput}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Text>Подтвердите новый пароль:</Text>
          <TextInput
            style={styles.txtInput}
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={changePass}>
            <Text>Изменить пароль</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setPassUpdateMode(false)}>
            <Text>Отмена</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
  },
  profileLogo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  userInfo: {
    alignItems: 'center',
    borderRadius: 10,
    width: 300,
  },
  userInfoInner: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
    paddingTop: 10,
  },
  userInfoInnerString: {
    color: 'black',
    fontSize: 20,
    marginBottom: 15,
  },
  txtInput: {
    backgroundColor: 'white',
    width: 200,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Profile;

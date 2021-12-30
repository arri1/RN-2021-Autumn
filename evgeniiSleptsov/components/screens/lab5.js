import React, {useState} from "react";
import { Text, SafeAreaView, View, ToastAndroid, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from "react-native";
import {useQuery, useMutation} from "@apollo/client";
import {GET_USER} from "../grphql/qrs";
import {UPDATE_USER} from "../grphql/mutations";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Lab5 = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const [updateModePassword, setUpdateModePassword] = useState(false);
    const [changeName, setChangeName] = useState('');
    const [password, setPassword] = useState('');
    const [passUpdateMode, setPassUpdateMode] = useState(false);
    const [changeGroup, setChangeGroup] = useState('');
    const [changeLogin, setChangeLogin] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const [notGet, setNotGet] = useState(false);
    const {client} = useQuery(GET_USER, {
      onCompleted: ({user}) => {
        setLogin(user?.login);
        setName(user?.name);
        setGroup(user?.group);
      },
      onError: () => {},
    });
    const onPressUpdate = () => {
        update({
            variables:{
                data:{
                    login: {set:(changeLogin==='')?login:changeLogin},
                    name: {set:(changeName==='')?name:changeName},
                    group: {set:(changeGroup==='')?login:changeGroup}
                }
            }
        })
        setUpdateMode(!updateMode);
        client.resetStore();
    };
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
    return true;
  };

  const changePass = () => {
      if (!passValidate()) {
          return null;
      }
      save: ({
        variables: {
          data: {
            password: {set: password},
          },
        },
      });
      ToastAndroid.show('Пароль изменен', ToastAndroid.SHORT);
      setPassUpdateMode(false);
    };

  const getItems = async () => {
      if (!notGet) {
        onChangeLogin(await AsyncStorage.getItem('login'));
        onChangeGroup(await AsyncStorage.getItem('group'));
        onChangeName(await AsyncStorage.getItem('name'));
        setNotGet(false);
      }
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
        AsyncStorage.setItem('group', ' ')
        AsyncStorage.setItem('name', ' ')
        AsyncStorage.setItem('login', ' ')
        AsyncStorage.setItem('password', ' ')
        AsyncStorage.setItem('token', ' ')
        navigation.replace("firstScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, {color: 'white'}]}>Ваш профиль</Text>
      <Image
        style={styles.profileLogo}
        source={require('../icons/user.png')}
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
            onChangeText={text => setPassword(text)}
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
    backgroundColor: '#2F42B2',
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
    borderRadius: 10,
    width: 300,
    paddingTop: 10,
    backgroundColor: '#5AC8FA',
  },
  userInfoInnerString: {
    color: 'white',
    fontSize: 20,
    marginBottom: 15,
  },
  txtInput: {
    backgroundColor: 'black',
    width: 200,
    marginBottom: 10,
    color: 'white',
    borderRadius: 10,
  },
  btn: {
    width: 200,
    backgroundColor: '#5AC8FA',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  inputText: {
      borderColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      margin: 20,
      marginTop: 10,
    },
});
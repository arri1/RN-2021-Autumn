import React, {useState} from 'react';
import {Text,View, StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {AUTH} from '../../gqls/mutations';
import {UPDATE_USER} from '../../gqls/mutations';
import {TextInput} from 'react-native-paper';

const Login = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      console.log('Authorization OK');
      setAuthorized(true);
      navigation.replace("TabNavigation");
      onChangeGroup(authUser.user.group);
      onChangeName(authUser.user.name);
      await AsyncStorage.setItem('token', authUser.token);
      if (authUser.user.group!=null)
        await AsyncStorage.setItem('group', authUser.user.group);
      else
        await AsyncStorage.setItem('group', '');
      if (authUser.user.name!=null)
        await AsyncStorage.setItem('name', authUser.user.name);
      else
        await AsyncStorage.setItem('name', '');
    },
  });

  const onAuthorization = () => {
    authorization({
      variables: {login, password},
    });
  };

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({updateUser}) => {
      console.log('Update OK');
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
          password: {set: password},
          name: {set: name},
        },
      },
    });
  };

  const signOut = () => {
    onChangeLogin(null);
    onChangePassword(null);
    onChangeName(null);
    onChangeGroup(null);
    setAuthorized(false);
    AsyncStorage.setItem('token', '');
  };

  const textInputTheme = {
    colors: {
        primary: 'white',
        text: 'white',
        placeholder: '#F6F6F6'
    }
}

  return (
    <SafeAreaView style={styles.main}>
    <View>
      {!authorized && (
        <View style={styles.Box}>
          <Text style={styles.ConText}>Профиль:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            theme={textInputTheme}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />

          <Text style={styles.ConText}>Пароль:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            theme={textInputTheme}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />

          <TouchableOpacity
            style={styles.signButton}
            onPress={onAuthorization}>
            <Text style={styles.text}>Авторизоваться</Text>
          </TouchableOpacity>      
          <TouchableOpacity
            style={styles.signButton}
            onPress={()=>{navigation.replace("AddProfile");}}>
            <Text style={styles.text}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!authorized && (
        <View style={[styles.Box]}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.ConText}>Настройки профиля: {login}</Text>
          </View>

          <Text style={styles.ConText}>Профиль:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            theme={textInputTheme}
            placeholder={''}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />
          <Text style={styles.ConText}>Пароль:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            theme={textInputTheme}
            placeholder={''}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />
          <Text style={styles.ConText}>Группу:</Text>
          <TextInput
            onChangeText={onChangeGroup}
            value={group}
            theme={textInputTheme}
            placeholder={''}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />
          <TouchableOpacity style={styles.signButton} onPress={onUpdate}>
            <Text style={styles.text}>Сохранить изменения</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signButton} onPress={signOut}>
            <Text style={styles.text}>Выйти с профиля</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  
  Box: {
    height: '100%',
    justifyContent: 'center',
  },

  inputText: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
  },

  ConText: {
    fontSize: 20,
    marginLeft: 5,
    color: 'black',
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    color: 'white',
  },

  signButton: {
    backgroundColor: 'orange',
    margin: 5,
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 90,
  },
});

export default Login;
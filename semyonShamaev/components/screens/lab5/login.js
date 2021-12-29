import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {AUTH, UPDATE_USER} from '../../graphQL/mutations';
import Tabs from '../../routers/tabs';

const Login = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      setAuthorized(true);
      onChangeGroup(authUser.user.group);
      onChangeName(authUser.user.name);
      onChangeLogin(authUser.user.login);
      await AsyncStorage.setItem('token', authUser.token);
      if (authUser.user.group != null)
        await AsyncStorage.setItem('group', authUser.user.group);
      else await AsyncStorage.setItem('group', '');
      await AsyncStorage.setItem('name', authUser.user.name);
      await AsyncStorage.setItem('login', authUser.user.login);
      await AsyncStorage.setItem('password', password);
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        ToastAndroid.show('Неверный пароль', ToastAndroid.SHORT);
        return null;
      }
      ToastAndroid.show('Неверный логин или пароль', ToastAndroid.SHORT);
    },
  });

  const onAuthorization = () => {
    authorization({
      variables: {login, password},
    });
  };

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({updateUser}) => {
      ToastAndroid.show('Data saved', ToastAndroid.SHORT);
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

  return (
    <View style={styles.main}>
      {!authorized && (
        <View>
          <View style={styles.viewBox}>
            <View style={styles.viewInput}>
              <Text style={styles.labelText}>Login:</Text>
              <TextInput
                onChangeText={onChangeLogin}
                value={login}
                style={[styles.inputText, styles.text, {width: '100%'}]}
              />
            </View>

            <View style={styles.viewInput}>
              <Text style={styles.labelText}>Password:</Text>
              <TextInput
                onChangeText={onChangePassword}
                value={password}
                style={[styles.inputText, styles.text]}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onAuthorization}>
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!authorized && <Tabs />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  },

  viewBox: {
    margin: 15,
  },

  viewInput: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputText: {
    width: '100%',
    paddingLeft: 0,
    borderRadius: 20,
    marginLeft: 0,
    backgroundColor: '#AEAEAE',
    alignContent: 'flex-start',
  },

  labelText: {
    fontSize: 20,
    color: '#000000',
  },

  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  button: {
    backgroundColor: '#000000',
    margin: 15,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default Login;
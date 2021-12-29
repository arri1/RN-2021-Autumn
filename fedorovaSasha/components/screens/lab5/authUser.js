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
import {AUTH, UPDATE_USER} from '../../apollo/mutations';
import TabNavigator from '../../routers/TabNavigator';

const AuthUser = ({navigation}) => {
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
        ToastAndroid.show('Неверен пароль', ToastAndroid.SHORT);
        return null;
      }
      ToastAndroid.show('Что то пошло не так', ToastAndroid.SHORT);
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

  const signOut = () => {
    onChangeLogin(null);
    onChangePassword(null);
    onChangeName(null);
    onChangeGroup(null);
    setAuthorized(false);
    AsyncStorage.setItem('token', '');
  };

  return (
    <View style={styles.main}>
      {!!authorized && (
        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={styles.textButton}>Log out</Text>
        </TouchableOpacity>
      )}
      {!authorized && (
        <View>
          <View style={styles.viewBox}>
            <View style={styles.viewInput}>
              <Text style={styles.labelText}>Login:</Text>
              <TextInput
                onChangeText={onChangeLogin}
                value={login}
                style={[styles.inputText, styles.text, {width: '81%'}]}
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
      {!!authorized && <TabNavigator />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  viewBox: {
    margin: 15,
  },
  viewInput: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    width: '71%',
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#C27E5D',
    alignContent: 'flex-start',
  },

  labelText: {
    fontSize: 20,
    color: '#8F401A',
  },

  text: {
    fontSize: 16,
    color: 'white',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#78C25D',
    margin: 15,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default AuthUser;

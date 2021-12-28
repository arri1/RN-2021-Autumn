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
      {!authorized && (
        <View style={styles.viewBox}>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Login:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text]}
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

          <TouchableOpacity style={styles.button} onPress={onAuthorization}>
            <Text style={styles.text}>Log in</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!authorized && (
        <View style={[styles.viewBox]}>
          <Text style={styles.labelText}>Сhange data</Text>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Login:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              placeholder={'Login'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Password:</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              placeholder={'Password'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Name:</Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              placeholder={'Name'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Group:</Text>
            <TextInput
              onChangeText={onChangeGroup}
              value={group}
              placeholder={'Group'}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onUpdate}>
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={signOut}>
            <Text style={styles.textButton}>Log out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  viewBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    width: 200,
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#C27E5D',
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
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
});

export default AuthUser;

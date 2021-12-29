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
import {UPDATE_USER} from '../../graphQL/mutations';

const Lab5 = () => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [notGet, setNotGet] = useState(true);

  const getItems = async () => {
    if (notGet) {
      onChangeLogin(await AsyncStorage.getItem('login'));
      onChangePassword(await AsyncStorage.getItem('password'));
      onChangeName(await AsyncStorage.getItem('name'));
      setNotGet(false);
    }
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
          name: {set: name},
          password: {set: password},
          login: {set: login},
        },
      },
    });
  };

  getItems();

  return (
    <View style={[styles.viewBox]}>
      <Text style={[styles.labelText, {marginTop: 15, textAlign: 'center'}]}>
        Сhange data
      </Text>
      <View style={styles.viewInput}>
        <Text style={styles.labelText}>Login:</Text>
        <TextInput
          onChangeText={onChangeLogin}
          value={login}
          placeholder={'Login'}
          style={[styles.inputText, styles.text, {width: '78%'}]}
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
          style={[styles.inputText, styles.text, {width: '78%'}]}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onUpdate}>
        <Text style={styles.textButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  },
  viewBox: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  },
  viewInput: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    width: '67%',
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#AEAEAE',
  },

  labelText: {
    fontSize: 20,
    color: '#000000',
  },

  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  textButton: {
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#AEAEAE',
    margin: 15,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default Lab5;
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {USER} from '../gqls/user/query';
import {UPDATE_USER} from '../gqls/user/mutations';
import {useDispatch} from 'react-redux';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const Lab5 = props => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState('');

  const apollo = useApolloClient();

  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const {user} = useQuery(USER, {
    onCompleted: ({user}) => {
      setLogin(user.login);
      setName(user.name);
      setGroup(user.group);
    },
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const editUser = () => {
    if (name != '' && login != '')
      updateUser({
        variables: {
          data: {
            login: {set: login},
            name: {set: name},
            group: {set: group},
            password: {set: password},
          },
        },
      });
  };

  const logOut = () => {
    dispatch({type: 'SIGN_IN', signedIn: false});
    apollo.resetStore();
    props.navigation.navigate('Login');
  };

  const back = () => {
    props.navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputField, {marginTop: 200}]}>
        <TextInput
          style={styles.text}
          placeholder="Login"
          onChangeText={text => setLogin(text)}>
        </TextInput>
      </View>
      <View style={styles.inputField}>
        <TextInput
          style={styles.text}
          placeholder="Password"
          onChangeText={text => setPassword(text)}>
        </TextInput>
      </View>
      <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Name"
                onChangeText={text => setName(text)}>
                {name}
              </TextInput>
            </View>
            <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Group"
                onChangeText={text => setGroup(text)}>
                {group}
              </TextInput>
            </View>
      <TouchableOpacity style={[styles.button, {marginTop:30}]} onPress={editUser}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {marginTop:30}]} onPress={logOut}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    height: '100%'
  },
  text: {
    fontSize: 19,
    color: '#000000',
    opacity: 1
  },
  inputField: {
    alignSelf: 'center',
    width: 335,
    minHeight: 50,
    alignItems: 'flex-start',
    paddingLeft: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#BB86FC',
    marginTop: 10,
    marginBottom: 0,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 19,
    color: '#000000'
  }
});

export default Lab5;
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {AUTH} from '../../gqls/qwery/mutations';
import {UPDATE_USER} from '../../gqls/qwery/mutations';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      console.log('Authorization OK');
      setAuthorized(true);
      onChangeGroup(authUser.user.group);
      onChangeName(authUser.user.name);
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

  return (
    <View>
      {!authorized && (
        <View style={styles.viewBox}>
          <Text style={styles.labelText}>Login:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Password:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity
            style={styles.signInButton}
            onPress={onAuthorization}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!authorized && (
        <View style={[styles.viewBox]}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.labelText}>Edit profile: {login}</Text>
          </View>

          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholder={'Name'}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Group:</Text>
          <TextInput
            onChangeText={onChangeGroup}
            value={group}
            placeholder={'Group'}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity style={styles.signInButton} onPress={onUpdate}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={signOut}>
            <Text style={styles.text}>Sign out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    height: '100%',
    justifyContent: 'center',
  },

  inputText: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    marginTop: 10,
  },

  labelText: {
    fontSize: 20,
    marginLeft: 5,
  },

  text: {
    fontSize: 16,
  },

  signInButton: {
    backgroundColor: '#A8C75A',
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignItems: 'center',
  },
});

export default SignIn;

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {useMutation, useQuery} from '@apollo/client';
import {USER} from '../../gqls/qwery/queries';
import {UPDATE_USER} from '../../gqls/qwery/mutations';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [mess, onChangeMess] = useState('');
  const [name, onChangeName] = useState(null);
  const [group, onChangeGroup] = useState(null);

  const {} = useQuery(USER, {
    onCompleted: ({user}) => {
      onChangeLogin(user.login);
      onChangeGroup(user.group);
      onChangeName(user.name);
    },
    onError: () => {},
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: ({updateUser}) => {
      console.log('Update OK');
    },
    onError: ({message}) => {
      console.log(message);
    },
  });

  const onUpdate = () => {
    onChangeMess('saved!');
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
    onChangeMess('');
    onChangeLogin(null);
    onChangeName(null);
    onChangeGroup(null);
    AsyncStorage.clear();
    navigation.replace('SignIn');
  };

  return (
    <LinearGradient style={styles.main} colors={['#6991F5', '#ffffff']}>
      <View>
        <View style={[styles.viewBox]}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.labelText}>
              Edit profile: {login} {mess}
            </Text>
          </View>

          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Group:</Text>
          <TextInput
            onChangeText={onChangeGroup}
            value={group}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity style={styles.signInButton} onPress={onUpdate}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={signOut}>
            <Text style={styles.text}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    height: '100%',
    justifyContent: 'center',
    margin: 10,
  },

  inputText: {
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#ffffff',
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

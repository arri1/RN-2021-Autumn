import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {useMutation, useQuery} from '@apollo/client';
import {USER} from '../../gqls/qwery/queries';
import {UPDATE_USER} from '../../gqls/qwery/mutations';

const SignIn = ({navigation}) => {
  const [mess, onChangeMess] = useState('');
  const [login, onChangeLogin] = useState('');
  const [name, onChangeName] = useState('');
  const [group, onChangeGroup] = useState('');

  const [isPasswordEdit, setPasswordEdit] = useState(false);
  const [passwordNew1, onChangePasswordNew1] = useState('');
  const [passwordNew2, onChangePasswordNew2] = useState('');

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
    ToastAndroid.show('Saved', ToastAndroid.SHORT);
    updateUser({
      variables: {
        data: {
          group: {set: group},
          name: {set: name},
        },
      },
    });
  };

  const updatePass = () => {
    if (passwordNew1 !== '' && passwordNew1 === passwordNew2) {
      updateUser({
        variables: {
          data: {
            password: {set: passwordNew1},
          },
        },
      });
      ToastAndroid.show('Password update', ToastAndroid.SHORT);
      setPasswordEdit(false);
    } else {
      ToastAndroid.show("Passwords don't match", ToastAndroid.SHORT);
    }
  };

  const signOut = () => {
    onChangeMess('');
    onChangeLogin('');
    onChangeName('');
    onChangeGroup('');
    AsyncStorage.clear();
    navigation.replace('SignIn');
  };

  const onCancel = () => {
    onChangePasswordNew1('');
    onChangePasswordNew2('');
    setPasswordEdit(false);
  };

  return (
    <LinearGradient style={styles.main} colors={['#6991F5', '#ffffff']}>
      <ScrollView>
        <View style={styles.main}>
          {!isPasswordEdit ? (
            <View style={[styles.viewBox]}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.labelTextTitle}>
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

              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => setPasswordEdit(true)}>
                <Text style={styles.text}>Password Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.signInButton} onPress={signOut}>
                <Text style={styles.text}>Sign out</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[styles.viewBox]}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Text style={styles.labelTextTitle}>Edit password</Text>
              </View>

              <Text style={styles.labelText}>New password:</Text>
              <TextInput
                onChangeText={onChangePasswordNew1}
                value={passwordNew1}
                style={[styles.inputText, styles.text]}
              />

              <Text style={styles.labelText}>Confirm new password:</Text>
              <TextInput
                onChangeText={onChangePasswordNew2}
                value={passwordNew2}
                style={[styles.inputText, styles.text]}
              />

              <TouchableOpacity
                style={styles.signInButton}
                onPress={updatePass}>
                <Text style={styles.text}>Update password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => onCancel()}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },

  viewBox: {
    height: '100%',
    marginHorizontal: 10,
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

  labelTextTitle: {
    fontSize: 22,
    marginVertical: 10,
    marginLeft: 5,
  },

  text: {
    fontSize: 15,
  },

  signInButton: {
    backgroundColor: '#A8C75A',
    height: 45,
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignItems: 'center',
  },
});

export default SignIn;

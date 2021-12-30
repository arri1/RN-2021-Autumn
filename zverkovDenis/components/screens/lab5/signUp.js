import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useMutation} from '@apollo/client';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {REG} from '../../gqls/qwery/mutations';

const SingUp = ({navigation}) => {
  const [login, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');
  const [name, onChangeName] = useState('');
  const [registrated, setRegistrated] = useState(false);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      setRegistrated(true);
    },
  });

  const validate = () => {
    if (name === '') {
      ToastAndroid.show('Name field empty', ToastAndroid.SHORT);
      return false;
    }
    if (login === '') {
      ToastAndroid.show('Login field empty', ToastAndroid.SHORT);
      return false;
    }
    if (password === '') {
      ToastAndroid.show('Password field empty', ToastAndroid.SHORT);
      return false;
    }
    return true;
  };

  const onRegistration = () => {
    if (validate()) {
      registration({
        variables: {login, password, name},
      });

      AsyncStorage.clear();
    }
  };

  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
      {!registrated && (
        <View style={styles.viewBox}>
          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            style={[styles.inputText, styles.text]}
          />

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
            style={styles.signUpButton}
            onPress={onRegistration}>
            <Text style={styles.text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={[styles.viewBox, {alignItems: 'center'}]}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Welcome, {name}!
          </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    height: '100%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  inputText: {
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },

  labelText: {
    fontSize: 20,
    marginLeft: 5,
  },

  text: {
    fontSize: 16,
  },

  signUpButton: {
    backgroundColor: '#A8C75A',
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignItems: 'center',
  },
});

export default SingUp;

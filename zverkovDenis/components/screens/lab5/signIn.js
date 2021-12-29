import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {useMutation} from '@apollo/client';
import {AUTH} from '../../gqls/qwery/mutations';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);

  const [authorization] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      console.log('Authorization OK');

      await AsyncStorage.setItem('token', authUser.token);
      navigation.replace('TabNavigator');
    },
  });

  const onAuthorization = () => {
    authorization({
      variables: {login, password},
    });
  };

  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
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

        <TouchableOpacity style={styles.signInButton} onPress={onAuthorization}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              fontSize: 20,
              color: '#0000FF',
              textDecorationLine: 'underline',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    height: '100%',
    margin: 10,
    justifyContent: 'center',
  },

  inputText: {
    borderColor: 'black',
    backgroundColor: '#ffffff',
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

  signUpButton: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
});

export default SignIn;

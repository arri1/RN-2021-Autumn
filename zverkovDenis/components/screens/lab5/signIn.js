import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {AUTH} from '../../gqls/qwery/mutations';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, setName] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  const [authorization] = useMutation(AUTH, {
    onCompleted: ({authUser}) => {
      setAuthorized(true);
      setName(authUser.user.name);
    },
  });

  const onAuthorization = () => {
    authorization({
      variables: {login, password},
    });
  };

  return (
    <View>
      {!authorized && (
        <View style={styles.viewBox}>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            placeholder={'Login'}
            style={[styles.inputText, styles.text]}
          />
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder={'Password'}
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
        <View style={[styles.viewBox, {alignItems: 'center'}]}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Hello, {name}!
          </Text>
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

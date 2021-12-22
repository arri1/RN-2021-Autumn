import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useMutation} from '@apollo/client';
import {AUTH} from '../gqls/users/mutations';
import {Neomorph} from 'react-native-neomorph-shadows';
import {styles} from '../styles/lab5Styles';

const SignIn = ({navigation}) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [signed, setSigned] = useState(false);

  const [registrate] = useMutation(AUTH, {
    onCompleted: ({authUser}) => {
      setSigned(true);
      setName(authUser.user.name);
    },
    onError: ({message}) => {
      console.log(message);
      if (message === 'Incorrect password') {
        console.log('Неверен пароль');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    console.log('YES ' + login);
    registrate({
      variables: {login, password},
    });
  };
  return (
    <View style={styles.main}>
      {!signed && (
        <View>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <TextInput
              onChangeText={text => {
                setLogin(text);
              }}
              placeholder={'Login'}
              style={styles.buttonText}
            />
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            inner
            style={styles.buttonShadow}>
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder={'Password'}
              style={styles.buttonText}
            />
          </Neomorph>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity onPress={submit}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
      {!!signed && (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.buttonText}>Hello {name}</Text>
          <Neomorph
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.buttonShadow}>
            <TouchableOpacity
              onPress={() => {
                setSigned(false);
                setLogin(null);
                setPassword(null);
                setName(null);
              }}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </Neomorph>
        </View>
      )}
    </View>
  );
};

export default SignIn;

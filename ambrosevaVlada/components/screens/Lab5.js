import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {USER} from '../gqls/user/query';
import {SIGN_IN, SIGN_UP} from '../gqls/user/mutation';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const Lab5 = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [pswVisible, setPswVisible] = useState(true);

  const apollo = useApolloClient();

  const [user] = useMutation(SIGN_IN, {
    onCompleted: async ({authUser}) => {
      await AsyncStorage.setItem('token', authUser.token);
      props.navigation.navigate('UserScreen');
    },
    onError: ({message}) => {
      setMessage(message);
    },
  });

  const signIn = () => {
    if (login != '' && password != '') {
      user({
        variables: {
          data: {
            login,
            password,
          },
        },
      });
    }
  };

  const [newUser] = useMutation(SIGN_UP, {
    onCompleted: ({registerUser}) => {},
    onError: ({message}) => {
      if (message === 'Unique constraint failed on the fields: (`login`)')
        setMessage('Login is already used');
    },
  });

  const createUser = () => {
    newUser({
      variables: {
        data: {
          password,
          login,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxArea}>
        <ImageBackground
          resizeMode={'contain'}
          style={styles.imgBackGround}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd.jpg')}>
          <View style={styles.area}>
            <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Login"
                onChangeText={text => setLogin(text)}></TextInput>
            </View>
            <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Password"
                secureTextEntry={pswVisible}
                onChangeText={text => setPassword(text)}></TextInput>
              <TouchableOpacity
                style={[
                  styles.selectCircle,
                  {backgroundColor: pswVisible ? '#E6D899' : '#FD442E'},
                ]}
                onPress={() => setPswVisible(!pswVisible)}></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#FD442E'}]}
              onPress={createUser}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, {textAlign: 'center'}]}>{message}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  boxArea: {
    marginTop: '20%',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  area: {
    alignItems: 'center',
  },
  imgBackGround: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  buttonText: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#FFF',
    textAlign: 'center',
  },
  selectCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#FD442E',
    marginLeft: 11,
  },
  text: {
    width: 250,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    textAlignVertical: 'center',
  },
  inputField: {
    width: 335,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 42,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    marginBottom: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
  },
  button: {
    width: 101,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#AAC284',
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab5;

import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {USER} from '../gqls/user/query';
import {SIGN_IN, SIGN_UP} from '../gqls/user/mutation';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const Lab5 = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const apollo = useApolloClient();

  const [user] = useMutation(SIGN_IN, {
    onCompleted: ({authUser}) => {
      apollo.writeQuery({query: USER, data: {user: authUser.user}});
      props.navigation.navigate('UserPage');
    },
  });

  const signIn = () => {
    user({
      variables: {
        data: {
          login,
          password,
        },
      },
    });
  };

  const [newUser] = useMutation(SIGN_UP, {
    onCompleted: ({registerUser}) => {},
    onError: ({message}) => {
      console.log(message);
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
          style={styles.imgBackGround}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd2.jpg')}>
          <View style={styles.inputArea}>
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
                onChangeText={text => setPassword(text)}></TextInput>
            </View>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#FD442E'}]}
          onPress={createUser}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  boxArea: {
    marginTop: 88,
    height: '100%',
    width: 393,
    backgroundColor: '#21434F',
    borderRadius: 40,
    alignItems: 'center',
  },
  inputArea: {
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  imgBackGround: {
    width: 393,
    height: 405,
  },
  buttonText: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#FFF',
    textAlign: 'center',
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
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lab5;

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
import {UPDATE_USER} from '../gqls/user/mutation';
import {useDispatch} from 'react-redux';

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const UserPage = props => {
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
  };

  const goToPosts = () => {
    props.navigation.navigate('PostScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={{marginTop: 14, marginLeft: 29}}
          onPress={goToPosts}>
          <Text style={[styles.text, {opacity: 0.5}]}>Posts</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxArea}>
        <ImageBackground
          style={styles.imgBackGround}
          resizeMode={'contain'}
          imageStyle={{borderRadius: 40}}
          source={require('../../android/app/src/main/assets/images/bgd.jpg')}>
          <View style={styles.inputArea}>
            <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Login"
                onChangeText={text => setLogin(text)}>
                {login}
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
            <View style={styles.inputField}>
              <TextInput
                style={styles.text}
                placeholder="Password"
                onChangeText={text => setPassword(text)}>
                {password}
              </TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={editUser}>
              <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={logOut}>
              <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    position: 'absolute',
  },
  boxArea: {
    marginTop: '20%',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  postsArea: {
    minHeight: 196,
    maxHeight: 196,
  },
  inputArea: {
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
  text: {
    width: 250,
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#121213',
    textAlignVertical: 'center',
  },
  title: {
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    letterSpacing: -1,
    color: '#121213',
    textAlign: 'right',
    marginRight: 29,
    marginTop: 14,
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
    backgroundColor: '#FD442E',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserPage;

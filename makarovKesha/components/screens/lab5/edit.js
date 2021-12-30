import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation, useQuery} from '@apollo/client';
import {USER} from '../../graphQL/queries';
import {UPDATE_USER} from '../../graphQL/mutations';

const SignIn = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [mess, onChangeMess] = useState('');
  const [name, onChangeName] = useState(null);

  const {} = useQuery(USER, {
    onCompleted: async ({user}) => {
      onChangeLogin(user.login);
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

  const signOut = () => {
    onChangeMess('');
    onChangeLogin(null);
    onChangeName(null);
    AsyncStorage.clear();
    navigation.replace('Login');
  };

  return (
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

          <TouchableOpacity style={styles.signInButton} onPress={onUpdate}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={signOut}>
            <Text style={styles.text}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    viewBox: {
        height: '100%',
        marginTop: 40,
        margin: 10,
      },
    
      inputText: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        borderRadius: 20,

      },
    
      labelText: {          
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5,
        alignSelf: 'center',
        marginBottom: 10
      },
    
      text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 6,
        color: '#2F88F0'
      },
    Button: {
        marginTop: 30,
        height: 40,
        width: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#2F88F0",      
        alignSelf: 'center'
      },
      ButtonText: {
        lineHeight: 35,
        height: 35,
        marginLeft: 6,
        color: '#FFFFFF',
        fontSize: 16
      },
    Input: {
        height: 45,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
        padding: 6,
        paddingLeft: 12,
        lineHeight: 35,
        backgroundColor: "#AEAEAE",
        color: '#FFFFFF',
        fontSize: 16, 
        alignSelf: 'center'
      },
    main: {
        backgroundColor: "#E1E4E7",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        
    }
  });

export default SignIn;
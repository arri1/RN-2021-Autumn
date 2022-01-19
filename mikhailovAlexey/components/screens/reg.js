import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput,
} from 'react-native';

import { useMutation } from '@apollo/client';
import styles from '../styles/styles';
import { REG } from '../gql/mutations';

const reg = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [group, setGroup] = useState('');
  const [name, setName] = useState('');

  const [register] = useMutation(REG, {
    onCompleted: () => {
      console.log('Регистрация прошла успешно');
      navigation.replace('Login');
    },
    onError: ({ message }) => {
      console.log(message);
      if (message === 'Unique constraint failed on the fields: (`login`)') {
        console.log('Такой пользователь уже существует');
        return null;
      }
      console.log('Что то пошло не так');
    },
  });

  const submit = () => {
    register({
      variables:
        { 
          login, password, group, name 
        },
    });
  };

  return (
    <View style={
      [styles.container, { flex: 1, justifyContent: 'center' }]
    }
    >
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            BACK
          </Text>
        </TouchableOpacity>
        <TextInput
          onChangeText={(text) => setLogin(text)}
          placeholder="LOGIN"
          placeholderTextColor="#fff"
          style={[styles.textArea, { 
            marginVertical: 5 
          }]}
        />
        <TextInput
          onChangeText={(text) => setGroup(text)}
          placeholder="GROUP"
          placeholderTextColor="#fff"
          style={[styles.textArea, { 
            marginVertical: 5 
          }]}
        />
        <TextInput
          onChangeText={(text) => setName(text)}
          placeholder="NAME"
          placeholderTextColor="#fff"
          style={[styles.textArea, { 
            marginVertical: 5 
          }]}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          style={[styles.textArea, { 
            marginVertical: 5 
          }]}
        />
        <View style={{ 
          marginVertical: 5 
        }}
        >
          <TouchableOpacity
            onPress={submit}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default reg;

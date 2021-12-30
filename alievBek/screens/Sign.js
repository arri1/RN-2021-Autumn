import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useApolloClient, useMutation} from '@apollo/client';
import {REG} from '../gqls/Mutations';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sign = props => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const apollo = useApolloClient();

  const [reg, {data, loading}] = useMutation(REG, {
    onCompleted: async () => {
      console.log('Register completed');
      props.navigation.navigate('Login');
    },
    onError: ({message}) => {
      console.log(message);
      if (
        message ===
        'GraphQL error: Unique constraint failed on the fields: (`login`)'
      ) {
        console.log('This login already exists');
        return null;
      }
      console.log('Registration error');
    },
  });

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login');
      return false;
    }
    if (password === '') {
      console.log('Null password');
      return false;
    }
    return true;
  };

  if (loading) return <ActivityIndicator color="#82D2FF" />;

  const createUser = () => {
    if (isDataCorrect())
      reg({
        variables: {
          password,
          login,
          name,
        },
      });
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setLogin(text)}
          value={login}
          placeholder="Login"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Name"
        />
        <Pressable
          onPress={() => {
            createUser();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginLeft: 70,
    height: 46,
    width: 200,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    lineHeight: 33,
    height: 33,
    marginLeft: 6,
    color: '#000000',
    fontSize: 16,
  },
  input: {
    height: 45,
    width: 320,
    borderRadius: 10,
    marginTop: 11,
    marginLeft: 11,
    padding: 6,
    paddingLeft: 11,
    lineHeight: 34,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 16,
  },
  main: {
    backgroundColor: '#000000',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sign;

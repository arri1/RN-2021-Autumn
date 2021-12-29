import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../../graphQL/mutations';

const Registration = ({navigation}) => {
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [name, onChangeName] = useState(null);
  const [registrated, setRegistrated] = useState(false);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      setRegistrated(true);
    },
  });

  const onRegistration = () => {
    registration({
      variables: {login, password, name},
    });
  };
  return (
    <View style={styles.main}>
      {!registrated && (
        <View style={styles.viewBox}>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Name:</Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              style={[styles.inputText, styles.text, {width: '100%'}]}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Login:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text, {width: '100%'}]}
            />
          </View>

          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Password:</Text>
            <TextInput
              onChangeText={onChangePassword}
              value={password}
              style={[styles.inputText, styles.text]}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onRegistration}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.labelText}>
            {name}, вы зарегистрированы.
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#E1E4E7',
  },

  viewBox: {
    margin: 15,
  },

  viewInput: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },

  inputText: {
    width: '100%',
    paddingLeft: 10,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: '#AEAEAE',
    alignContent: 'flex-start',
  },

  labelText: {
    fontSize: 20,
    color: '#000000',
  },

  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  button: {
    width: '100%',
    backgroundColor: '#000000',
    margin: 0,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default Registration;
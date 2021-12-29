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
              style={[styles.inputText, styles.text, {width: '80%'}]}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Login:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text, {width: '81%'}]}
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
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    width: '69%',
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#AEAEAE',
  },

  labelText: {
    fontSize: 20,
    color: '#000000',
  },

  text: {
    fontSize: 16,
    color: 'white',
  },

  button: {
    backgroundColor: '#000000',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default Registration;
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../../apollo/mutations';

const RegUser = ({navigation}) => {
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
              style={[styles.inputText, styles.text]}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelText}>Login:</Text>
            <TextInput
              onChangeText={onChangeLogin}
              value={login}
              style={[styles.inputText, styles.text]}
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
            {name}, you have successfully registered!
          </Text>
          <Image
            source={require('../../icons/clap.jpg')}
            resizeMode="contain"
            style={{marginTop: 15, borderRadius: 20}}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#CCF6CF',
  },
  viewBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInput: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    width: 200,
    paddingLeft: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#C27E5D',
  },

  labelText: {
    fontSize: 20,
    color: '#8F401A',
  },

  text: {
    fontSize: 16,
    color: 'white',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#78C25D',
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
});

export default RegUser;

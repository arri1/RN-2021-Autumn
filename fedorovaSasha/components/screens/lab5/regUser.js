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
          <Text style={styles.title}>Registration</Text>
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
              style={[styles.inputText, styles.text, {width: '70.5%'}]}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onRegistration}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push('Authorization');
            }}>
            <Text style={styles.text}>Authorization</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={styles.viewBox}>
          <Text style={[styles.labelText, {textAlign: 'center'}]}>
            {name}, you have successfully registered!
          </Text>
          <View style={styles.img}>
            <Image
              source={require('../../icons/clap.jpg')}
              resizeMode="contain"
              style={{borderRadius: 20}}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push('Authorization');
            }}>
            <Text style={styles.text}>Authorization</Text>
          </TouchableOpacity>
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
    margin: 15,
  },
  viewInput: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#8F401A',
  },
  inputText: {
    padding: 15,
    borderRadius: 20,
    marginLeft: 15,
    backgroundColor: '#78C25D',
  },

  labelText: {
    fontSize: 20,
    color: '#8F401A',
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#C27E5D',
    marginBottom: 15,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
});

export default RegUser;

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../../gqls/qwery/mutations';

const SingUp = ({navigation}) => {
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
    <View>
      {!registrated && (
        <View style={styles.viewBox}>
          <Text style={styles.labelText}>Name:</Text>
          <TextInput
            onChangeText={onChangeName}
            value={name}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Login:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            style={[styles.inputText, styles.text]}
          />

          <Text style={styles.labelText}>Password:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            style={[styles.inputText, styles.text]}
          />

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={onRegistration}>
            <Text style={styles.text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={[styles.viewBox, {alignItems: 'center'}]}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Welcome, {name}!
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    height: '100%',
    justifyContent: 'center',
  },

  inputText: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },

  labelText: {
    fontSize: 20,
    marginLeft: 5,
  },

  text: {
    fontSize: 16,
  },

  signUpButton: {
    backgroundColor: '#A8C75A',
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignItems: 'center',
  },
});

export default SingUp;

import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Lab4 = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);

  const [name, setName] = useState('admin');

  const signUpAction = name => {
    return {
      type: 'SIGN_UP',
      username: name,
    };
  };

  const onChangeText = text => {
    setName(text);
  };

  const signUp = name => {
    if (name != '') dispatch(signUpAction(name));
  };

  const drop = () => {
    dispatch({type: 'DROP'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.text}>WELCOME, {username}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => signUp(name)}>
        <Text style={styles.text}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#FD442E'}]}
        onPress={drop}>
        <Text style={styles.text}>DROP</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFC',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 335,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#FFFFFC',
    marginTop: 14,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4.65,
    elevation: 3,
    fontFamily: 'Montserrat',
    color: '#121213',
    fontSize: 18,
    textAlign: 'center',
  },
  textArea: {
    width: '100%',
    height: 256,
    borderRadius: 49,
    backgroundColor: '#AAC284',
    marginTop: -49,
    alignItems: 'center',
    paddingTop: 113,
  },
  button: {
    width: 100,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#AAC284',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PTSansNarrow-Bold',
    color: '#FFFFFC',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Lab4;

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {useMutation} from '@apollo/client';
import {REG} from '../../gqls/mutations';
import {TextInput} from 'react-native-paper';

const Addnewprofile = ({navigation}) => {
  const [nickname, onChangeNickname] = useState(null);
  const [login, onChangeLogin] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [registrated, setRegistrated] = useState(false);

  const [registration] = useMutation(REG, {
    onCompleted: () => {
      setRegistrated(true);
    },
  });

  const onRegistration = () => {
    registration({
      variables: {login, password, nickname},
    });
  };
  const textInputTheme = {
    colors: {
        primary: 'white',
        text: 'white',
        placeholder: '#F6F6F6',
    }
}
  return (
    <SafeAreaView style={styles.main}>
    <View>
      {!registrated && (
        <View style={styles.Box}>
          <Text style={styles.ConText}>Никнейм:</Text>
          <TextInput
            onChangeText={onChangeNickname}
            value={nickname}
            theme={textInputTheme}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />

          <Text style={styles.ConText}>Профиль:</Text>
          <TextInput
            onChangeText={onChangeLogin}
            value={login}
            theme={textInputTheme}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />

          <Text style={styles.ConText}>Новый пароль:</Text>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            theme={textInputTheme}
            style={[styles.inputText, styles.text, styles.textInputStyle]}
          />

          <TouchableOpacity
            style={styles.signButton}
            onPress={onRegistration}>
            <Text style={styles.text}>Добавить новый профиль</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signButton}
            onPress={()=>{navigation.replace("Login");}}>
            <Text style={styles.text}>Назад</Text>
          </TouchableOpacity>
        </View>
      )}
      {!!registrated && (
        <View style={[styles.Box, {alignItems: 'center'}]}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Успешно добавлен профиль, {nickname}❤️
          </Text>
          <TouchableOpacity
            style={styles.signButton}
            onPress={()=>{navigation.replace("Login");}}>
            <Text style={styles.text}>Назад</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  Box: {
    height: '100%',
    justifyContent: 'center',
  },

  inputText: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
  },

  ConText: {
    fontSize: 20,
    marginLeft: 5,
    color: 'black',
    textAlign: 'center',
  },

  text: {
    fontSize: 18,
    color: 'white',
  },

  signButton: {
    backgroundColor: 'orange',
    margin: 5,
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 65,
  },

});

export default Addnewprofile; 
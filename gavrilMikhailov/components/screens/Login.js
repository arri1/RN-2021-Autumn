import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

const Login = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const state = useSelector(state => state)

  const didTapButton = () => {
    Alert.alert('Далее', `Почта: ${email}\nПароль: ${password}`, [
      { text: "Ok", onPress: () => {} }
    ])
  }

  const isValidEmail = () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
  }

  const isValidPassword = () => {
    return password.length > 6
  }

  const isDisabled = !(isValidEmail() && isValidPassword())

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <TextInput 
          style={styles.textInput}
          onChangeText={onChangeEmail} 
          value={email}
          placeholder={"E-mail"}
          placeholderTextColor="#787A91"/>
        <TextInput 
          style={styles.textInput}
          onChangeText={onChangePassword} 
          value={password}
          secureTextEntry={true}
          placeholder={"Пароль"}
          placeholderTextColor="#787A91"/>
        <Pressable 
          style={[
            styles.submitButton, 
            isDisabled ? styles.disabledBackground : styles.normalBackground
          ]}
          disabled={isDisabled}
          onPress={didTapButton}>
            <Text style={[
              styles.submitButtonText,
              isDisabled ? styles.disabledText : styles.normalText
            ]}>
              Sign In
            </Text>
        </Pressable>
        <Text style={styles.watchLabel}>
          {state.value ? "I'm watching you." : ''}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#0F044C',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textInput: {
    width: '100%',
    height: 40,
    fontSize: 18,
    marginHorizontal: 16,
    color: '#EEEEEE',
    marginVertical: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#787A91'
  },
  submitButton: {
    marginTop: 40,
    width: 240,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  submitButtonText: {
    fontSize: 18
  },
  normalBackground: {
    backgroundColor: "#EEEEEE"
  },
  disabledBackground: {
    backgroundColor: '#141E61'
  },
  disabledText: {
    color: "#787A91"
  },
  normalText: {
    color: "#141E61"
  },
  watchLabel: {
    marginTop: 40,
    color: "#787A91"
  }
});

export default Login
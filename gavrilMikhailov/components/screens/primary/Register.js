import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { useMutation } from '@apollo/client'
import { REGISTER_QUERY } from '../../../apollo/apollo'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Register = ({ navigation }) => {

  const [login, onChangeLogin] = useState('')
  const [password, onChangePassword] = useState('')
  const [name, onChangeName] = useState('')

  const [registerQuery, {}] = useMutation(REGISTER_QUERY, {
    onCompleted: async ({ registerUser }) => {
      await AsyncStorage.setItem('authToken', registerUser.token)
      navigation.navigate('TabBarScreen')
    },
    onError: ({message}) => Alert.alert('Error', message, [{ text: "Ok", onPress: () => {} }])
  })

  const didTapRegisterButton = () => {
    registerQuery({
      variables: {
        login,
        password,
        name
      }
    })
  }

  const didTapBackButton = () => {
    navigation.pop()
  }

  const isValidLogin = () => {
    return login.length > 3
  }

  const isValidPassword = () => {
    return password.length > 3
  }

  const isDisabled = !(isValidLogin() && isValidPassword())

  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity 
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={didTapBackButton}
      >
        <Image source={require('../../../assets/arrow.backward.png')}/>
      </TouchableOpacity>
      <Text style={styles.title}>Register</Text>
      <View style={styles.view}>
        <TextInput 
          style={styles.textInput}
          onChangeText={onChangeLogin} 
          value={login}
          placeholder={"Login"}
          placeholderTextColor="#787A91"/>
        <TextInput 
          style={styles.textInput}
          onChangeText={onChangePassword} 
          value={password}
          secureTextEntry={true}
          placeholder={"Password"}
          placeholderTextColor="#787A91"/>
        <TextInput 
          style={styles.textInput}
          onChangeText={onChangeName} 
          value={name}
          placeholder={"Name"}
          placeholderTextColor="#787A91"/>
        <TouchableOpacity 
          style={[
            styles.submitButton, 
            isDisabled ? styles.disabledBackground : styles.normalBackground
          ]}
          activeOpacity={0.7}
          disabled={isDisabled}
          onPress={didTapRegisterButton}
        >
          <Text style={[styles.submitButtonText, isDisabled ? styles.disabledText : styles.normalText]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0F044C'
  },
  backButton: {
    marginTop: 30,
    marginLeft: 20,
    height: 56,
    width: 56
  },
  title: {
    fontSize: 36,
    color: '#EEEEEE',
    fontWeight: '900',
    paddingTop: 8,
    paddingLeft: 30
  },
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 300
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
    marginTop: 20,
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

export default Register
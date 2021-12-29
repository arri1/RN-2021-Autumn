import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'
import { useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { AUTH_QUERY } from '../../../apollo/apollo'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {

  const [login, onChangeLogin] = useState('')
  const [password, onChangePassword] = useState('')
  const state = useSelector(state => state)

  const [authQuery, {}] = useMutation(AUTH_QUERY, {
    onCompleted: async ({authUser}) => {
      await AsyncStorage.setItem('authToken', authUser.token)
      navigation.navigate('TabBarScreen')
    },
    onError: ({message}) => Alert.alert('Error', message, [{ text: "Ok", onPress: () => {} }])
  })

  const didTapLoginButton = () => {
    authQuery({
      variables: {
        login,
        password
      }
    })
  }

  const didTapRegisterButton = () => {
    navigation.navigate('RegisterScreen')
  }

  const isValidLogin = () => {
    return login.length > 3
  }

  const isValidPassword = () => {
    return password.length > 3
  }

  const isDisabled = !(isValidLogin() && isValidPassword())

  return (
    <SafeAreaView>
      <Text style={styles.title}>Sign In</Text>
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
        <TouchableOpacity 
          style={[
            styles.submitButton, 
            isDisabled ? styles.disabledBackground : styles.normalBackground
          ]}
          activeOpacity={0.7}
          disabled={isDisabled}
          onPress={didTapLoginButton}
        >
          <Text style={[styles.submitButtonText, isDisabled ? styles.disabledText : styles.normalText]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.submitButton, styles.normalBackground]}
          activeOpacity={0.7}
          onPress={didTapRegisterButton}
        >
          <Text style={[styles.submitButtonText, styles.normalText]}>
            To register
          </Text>
        </TouchableOpacity>
        <Text style={styles.watchLabel}>
          {state.value ? "I'm watching you." : ''}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#0F044C',
    fontSize: 36,
    color: '#EEEEEE',
    fontWeight: '900',
    paddingTop: 30,
    paddingLeft: 30
  },
  view: {
    backgroundColor: '#0F044C',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30
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

export default Login
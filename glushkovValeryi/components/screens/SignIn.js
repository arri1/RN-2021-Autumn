import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import { useMutation } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import StyledButton from '../common/StyledButton'
import { TextInput } from 'react-native-gesture-handler'
import { AUTH } from '../gqls/Mutations'

const SignIn = props => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [respose, setResponse] = useState('')
    const [color, setColor] = useState('')
    const [loginUser] = useMutation(AUTH, {
        onCompleted: async ({authUser}) => {
            console.log("authorization succeeded")
            console.log(authUser.token)
            await AsyncStorage.setItem('token', authUser.token)
            await setLoggedIn(true)
        },                                  
        onError: ({message}) => {
            setResponse('authorization failed')
            setColor('red')
            console.log({respose})
            console.error(message)
            if (message==='GraphQL error: Incorrect password'){
                console.log('Incorrect password')
                return  null
            }
        }
    })

    const setLoggedIn = async (value) => {
        dispatch({type:"SET_LOGGED", loggedIn: value})
    }

    useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLogin('')
        setPassword('')
        setResponse('')
      };
    }, [])
    )

    const onLoginPress = () => {
        loginUser({variables: {login, password}})
    }

    const onRegisterPress = () => {
        props.navigation.navigate('SignUp')
    }

    return(
        <KeyboardAvoidingView style = {styles.container} behavior='height'>
            <Text style = {{fontSize: 16, color: color, marginBottom: 10}}>{respose}</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder='Login'
                    style = {styles.input}
                    value = {login}
                    onChangeText = {text => setLogin(text)}
                />
                <TextInput
                    placeholder='Password'
                    style = {styles.input}
                    secureTextEntry
                    value = {password}
                    onChangeText = {text => setPassword(text)}
                />
            </View>
            <View style = {styles.buttonContainer}>
                <StyledButton
                    text = 'Login'
                    style = {styles.button}
                    onPress = {onLoginPress}
                />
                <StyledButton
                    text = 'Register'
                    style = {[styles.button, styles.buttonOutline]}
                    onPress = {onRegisterPress}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545454'
    },
    loginMessage: {
        fontSize: 16,
        marginBottom: 10
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        backgroundColor: '#D7FCD4',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    button: {
        backgroundColor: '#B6CCA1',
        width: 300,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: '#545454',
        borderColor: '#B6CCA1',
        borderWidth: 2,
        marginTop: 5
    }
});

export default SignIn;
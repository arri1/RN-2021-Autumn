import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import {  useMutation } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'

import StyledButton from '../common/StyledButton'
import { TextInput } from 'react-native-gesture-handler'
import { REG } from '../gqls/Mutations'

const SignUp = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [registerUser] = useMutation(REG)
    const [respose, setResponse] = useState('')

    useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLogin('')
        setName('')
        setPassword('')
        setResponse('')
      };
    }, [])
    )

    const onRegisterPress = () => {
        registerUser({variables: {login, password}})
            .then(({ data }) => {
                setResponse('')
                props.navigation.navigate("SignIn")
                console.log(data)

            })
            .catch(e => {
                setResponse('Registration failed.')
                console.log(e.message)
            })
    }

    const onCancelPress = () => {
        props.navigation.navigate("SignIn")
    }

    return(
        <KeyboardAvoidingView style = {styles.container} behavior='padding'>
            <Text style = {styles.regMessage}>{respose}</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder='Name'
                    style = {styles.input}
                    value = {name}
                    onChangeText = {text => setName(text)}
                />
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
                    text = 'Register'
                    style = {styles.button}
                    onPress = {onRegisterPress}
                />
                <StyledButton
                    text = 'Cancel'
                    style = {[styles.button, styles.buttonOutline]}
                    onPress = {onCancelPress}
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
    regMessage: {
        color: 'red',
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
        marginBottom: 10,
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

export default SignUp;
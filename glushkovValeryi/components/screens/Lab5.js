import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import { useMutation } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'

import StyledButton from '../common/StyledButton'
import { TextInput } from 'react-native-gesture-handler'
import { AUTH } from '../gqls/Mutations'

const Lab5 = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [respose, setResponse] = useState('')
    const [color, setColor] = useState('')
    const [loginUser] = useMutation(AUTH, {
        onCompleted: async ({loginUser}) => {
            console.log("herer")
            console.log(loginUser.token)
            localStorage.setItem('token', loginUser.token)
            addToken(loginUser.token)
        },                                  
        onError: ({message}) => {
            console.log(message)
            if (message==='GraphQL error: Incorrect password'){
                console.log('Incorrect password')
                return  null
            }
        }
    })


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
            .then(({ data }) => {
                setColor('#96be25')
                setResponse('authorization succeeded')
                console.log(data)
            })
            .catch(e => {
                setColor('red')
                setResponse('authorization failed')
                console.log(e.message)
            })
    }

    const onRegisterPress = () => {
        props.navigation.navigate('SignUp')
    }

    const onUpdatePress = () => {
        props.navigation.navigate('Update')
    }

    return(
        <KeyboardAvoidingView style = {styles.container} behavior='padding'>
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
                <StyledButton
                    text = 'Update'
                    style = {[styles.button, styles.buttonOutline]}
                    onPress = {onUpdatePress}
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

export default Lab5;
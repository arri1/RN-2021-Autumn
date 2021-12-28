import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import { useMutation } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import StyledButton from '../common/StyledButton'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { UPDATE_USER } from '../gqls/Mutations'

const Lab5 = props => {
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [respose, setResponse] = useState('')
    const [updateUser] = useMutation(UPDATE_USER, {
        onCompleted: async ({user}) => {
            console.log("from Update")
        },                                  
        onError: ({message}) => {
            console.error("from Update")
            console.error(message)
        }
    })

    useFocusEffect(
    React.useCallback(() => {
      return () => {
        setName('')
        setGroup('')
        setResponse('')
      };
    }, [])
    )

    const onUpdatePress = () => {
        const variables = {
            group: {set: group},
            name: {set: name},
        }
        updateUser({variables})
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
                        placeholder='Group'
                        style = {styles.input}
                        value = {group}
                        onChangeText = {text => setGroup(text)}
                    />
                </View>
                <View style = {styles.buttonContainer}>
                    <StyledButton
                        text = 'Update'
                        style = {styles.button}
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
    }
});

export default Lab5;
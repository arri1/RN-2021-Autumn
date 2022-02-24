import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, ImageBackground } from 'react-native'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../gql/mutations'

import picture from '../images/Lab1.png';

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white'
    },
    title: {
        fontSize: 50,
        fontFamily: 'Sofia-Regular',
        color: 'white',
    },
    btn: {
        borderRadius: 15,
        backgroundColor: '#0000A1',
        alignSelf: 'center',
        marginTop: 20,
        width: 250,
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        alignSelf: 'center',
        fontFamily: 'Sofia-Regular',
    },
    input: {
        fontSize: 25,
        fontFamily: 'Sofia-Regular',
        alignSelf: 'center',
        borderColor: 'black',
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
});

const Reg = ({navigation}) => {

    const [login,setLogin] = useState(null)
    const [password,setPassword] = useState(null)
    const [name,setName] = useState(null)

    const [registrate] = useMutation(REGISTER_USER, {
        onCompleted: () => {
          console.log('Регистрация прошла успешно');
          navigation.navigate('auth');
        },
        onError: ({message}) => {
          console.log(message);
          if (message === 'Unique constraint failed on the fields: (`login`)') {
            console.log('Такой пользователь уже существует');
            return null;
          }
          console.log('Что то пошло не так');
        },
      });
    const submit = () => {
        console.log('YES ' + login);
        registrate({
          variables: {login, password, name},
        });
    };

    return (
        <View style={styles.main}>
            <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>SIGN UP</Text>
                <TextInput
                    onChangeText={text => {setLogin(text);}}
                    placeholder={'LOGIN'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={text=>{setPassword(text);}}
                    placeholder={'PASSWORD'}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={text=>{setName(text);}}
                    placeholder={'NAME'}
                    style={styles.input}
                />
                <TouchableOpacity
                    onPress={submit}
                    style={styles.btn}
                >
                    <Text style={styles.title}>SIGN UP</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Reg

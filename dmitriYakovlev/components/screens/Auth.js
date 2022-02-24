import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from "react-native";
import { useMutation } from "@apollo/client"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_USER } from "../gql/mutations";

import picture from '../images/Lab4.png';

const Auth = ({navigation}) => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);


    const [authUser] = useMutation(AUTH_USER, {
        // функция выполнения запроса
        onCompleted: async ({authUser}) => {
            await AsyncStorage.setItem('token', authUser.token);
            navigation.navigate("tab");
            setLogin(authUser.user.name);
          },
          // при ошибке запроса
          onError: ({message}) => {
            console.log(message);
            if (message === 'Incorrect password') {
              console.log('Неверен пароль');
              return null;
            }
            console.log('Что то пошло не так');
          },
    });

    // функция проверяет авторизацию пользователя
    const submit = () => {
        if (login != null && password != null){
            authUser({
                variables: {login, password},
            });
            navigation.navigate("tab")
        }
        else
        console.log('Incorrect login or password!');
    };
   
    return ( 
        <View style={styles.main}>
            <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>SIGN IN</Text>
                <TextInput 
                    onChangeText={text => {setLogin(text);}}
                    placeholder="LOGIN" 
                    style={styles.input}
                />
                <TextInput 
                    onChangeText={text => {setPassword(text);}}
                    placeholder="PASSWORD" 
                    style={styles.input}
                />
                <TouchableOpacity onPress={submit} style={styles.btn}>
                    <Text style={styles.title}>LOGIN</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("reg")} style={styles.btn}>
                        <Text style={styles.title}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>        
    );
}

export default Auth;

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
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
})
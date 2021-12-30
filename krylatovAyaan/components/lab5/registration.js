import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Image} from 'react-native';
import {gql, useQuery, ApolloClient, InMemoryCache} from "@apollo/client";
import React, {useState} from 'react';
import {useMutation, useApolloClient} from '@apollo/client';
import {REG, GET_USER} from '../lab5/user';
import backIcon from '../../img/backIcon.png';

const Registration = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const apollo = useApolloClient()

    const registrationPressed = () => {
        if (login !== '') {
            if (password === confirmPassword) {
                addUser();
            }
            else {
                alert("Пароли не совпадают!");
            }
        }
        else {
            alert("Придумайте логин");
        }
    };

    const addUser = () => {
        userRegistration({
            variables: {
                data: {
                    password,
                    login
                }
            }
        });
    };

    const [userRegistration] = useMutation(REG, {
        onCompleted: async ({registerUser}) => {
            await AsyncStorage.setItem('token', registerUser.token);
            console.log("Регистрация прошла успешно");
            apollo.writeQuery({query: GET_USER, data: {user: registerUser.user}});
            navigation.replace('Authorization');
        },
        onError: ({message}) => {
            console.log(message);
        }
    });

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                onPress={() => {navigation.goBack()}}
                style={styles.iconButton}>
                <Image source={backIcon} style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.main}>
                <Text style={styles.title}>Регистрация</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Логин"
                    value={login}
                    onChangeText={enteredText => setLogin(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={enteredText => setPassword(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    onChangeText={enteredText => setConfirmPassword(enteredText)}
                />
                <TouchableOpacity style={styles.button} onPress={registrationPressed}>
                    <Text style={styles.text}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFE6DC',
        flex:1
    },
    main: {
        marginTop: '45%',
        alignItems:"center",
        justifyContent:"center"
    },
    title: {
        fontFamily: "Montserrat",
        fontSize: 17,
        textAlign: 'center'
    },
    box: {
        borderWidth: 1,
        borderColor: '#000',
        width: 300,
        height: 40,
        margin: 24,
        marginBottom: 0,
        borderRadius: 7
    },
    text: {
        fontFamily: "Montserrat",
        fontSize: 15
    },
    link: {
        fontFamily: "Montserrat",
        fontSize: 15,
        color: 'red'
    },
    button:{
        backgroundColor: '#E88F5D',
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center",
        margin: 24
    },
    icon: {
        width: 30,
        height: 30
    },
    iconButton: {
        marginTop: 20,
        marginLeft: 20
    }
});

export default Registration;
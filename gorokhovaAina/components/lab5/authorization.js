import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';
import {useQuery, useMutation, useApolloClient} from "@apollo/client";
import React, {useState} from 'react';
import {AUTH, GET_USER} from './user';
import TabNavigator from '../../components/routers/TabNavigator';

const Authorization = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const clear = () => {
        setLogin('');
        setPassword('');
    };

    const apollo = useApolloClient();

    const [auth] = useMutation(AUTH, {
        onCompleted: async ({ authUser }) => {
            await AsyncStorage.setItem('token', authUser.token);
            apollo.writeQuery({query: GET_USER, data: {user: authUser.user}});
            console.log('Authorization completed successfully');
            navigation.replace("Tab");
            clear();
        },
        onError: ({ message }) => {
            console.log(message);
        }
    });

    const getData = () => {
        auth ({
            variables: {
                data: {
                    login,
                    password
                }
            }
        });
    };

    const Login = () => {
        if (login !== '' || password !== '') {
            getData();
        }
        else {
            alert("Введите все данные!")
        }
    };

    const goRegistration = () => {
        navigation.navigate("Registration");
    };

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Авторизация</Text>
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
                type={password}
                onChangeText={enteredText => setPassword(enteredText)}
            />
            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text style={styles.text}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goRegistration}>
                <Text style={styles.link}>Зарегистрироваться</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFE6DC',
        flex: 1,
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
        fontSize: 15,
        margin: 10
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
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        margin: 24
    }
});

export default Authorization;
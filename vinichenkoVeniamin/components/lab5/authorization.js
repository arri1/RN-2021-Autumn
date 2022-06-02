import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {useQuery, useMutation, useApolloClient} from "@apollo/client";
import React, {useState} from 'react';
import {AUTH, GET_USER} from './user';

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
            alert("Fill in all the fields!")
        }
    };

    const goRegistration = () => {
        navigation.navigate("Registration");
    };

    return (
        <View style={styles.main}>
            <Text style={styles.title}>Authorization</Text>
            <TextInput
                style={styles.box}
                placeholder="Username"
                value={login}
                onChangeText={enteredText => setLogin(enteredText)}
            />
            <TextInput
                style={styles.box}
                placeholder="Password"
                value={password}
                type={password}
                onChangeText={enteredText => setPassword(enteredText)}
            />
            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text style={styles.text}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goRegistration}>
                <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#E8EAED',
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
        color: 'black'
    },
    button:{
        backgroundColor: '#5AD2F4',
        width: 200,
        height: 50,
        borderRadius: 7,
        alignItems:'center',
        justifyContent:'center',
        margin: 24
    }
});

export default Authorization;
import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import {gql, useQuery, ApolloClient, InMemoryCache} from "@apollo/client";
import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_USER, GET_USER} from '../lab5/user';
import backIcon from '../../assets/icons/backIcon.png';

const Update = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');

    const {} = useQuery(GET_USER, {
        onCompleted: ({ user }) => {
            setName(user.name);
            setGroup(user.group);
        },
        onError: () => {
            console.log("Что-то не так");
        }
    });

    const [update] = useMutation(UPDATE_USER, {
        onCompleted: ({ user }) => {
            console.log("Все сохранилось");
            alert("Все сохранилось!");
            navigation.goBack();
        },
        onError: ({message}) => {
            console.log(message);
        }
    });

    const updateUser = () => {
        update({
            variables: {
                data: {
                    name: {set: name},
                    group: {set: group},
                    password: {set: password}
                }
            }
        });
    };

    const updatePressed = () => {
        if (group !== '' && name !== '') {
            if (password !== '' && password === confirmPassword) {
                updateUser();
            }
            else {
                alert("Проверьте пароли!");
            }
        }
        else {
            alert("Введите все данные!");
        }
    };

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                onPress={() => {navigation.goBack()}} style={styles.iconButton}>
                <Image source={backIcon} style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.main}>
                <Text style={styles.title}>Редактирование пользователя</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Имя"
                    value={name}
                    onChangeText={enteredText => setName(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Группа"
                    value={group}
                    onChangeText={enteredText => setGroup(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Новый пароль"
                    value={password}
                    onChangeText={enteredText => setPassword(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    onChangeText={enteredText => setConfirmPassword(enteredText)}
                />
                <TouchableOpacity style={styles.button} onPress={updatePressed}>
                    <Text style={styles.text}>Сохранить</Text>
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
        marginTop: '40%',
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
        marginTop: 24,
        marginLeft: 24
    }
});

export default Update;
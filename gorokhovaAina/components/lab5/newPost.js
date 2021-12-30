import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {CREATE_ONE_POST} from '../lab5/getPosts';
import {GET_USER} from '../lab5/user';
import {useQuery, useMutation} from '@apollo/client';
import backIcon from '../../img/backIcon.png';

const NewPost = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('');

    const createButtonClicked = () => {
        if (text === '' || title === '') {
            alert("Введите все данные!");
        }
        else {
            onSave();
        }
    };

    const {user} = useQuery(GET_USER, {
        onCompleted: ({user}) => {
            setUserId(user.id);
        },
        onError: ({message}) => {
            alert(message);
        }
    });

    const [save] = useMutation(CREATE_ONE_POST, {
        onCompleted: ({createOnePost}) => {
            alert("Пост добавлен!");
            navigation.goBack();
        },
        onError: ({ message }) => {
            alert(message);
            console.log(message);
        }
    });

    const onSave = () => {
        save({
            variables: {
                data: {
                    title,
                    text,
                    user: {connect: {id: userId}}
                }
            }
        });
    };

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                onPress={() => {navigation.goBack()}}
                style={styles.iconButton}>
                <Image source={backIcon} style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.main}>
                <Text style={styles.title}>Добавить новый пост</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Заголовок"
                    value={title}
                    onChangeText={enteredText => setTitle(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Текст"
                    value={text}
                    onChangeText={enteredText => setText(enteredText)}
                />
                <TouchableOpacity style={styles.button} onPress={createButtonClicked}>
                    <Text style={styles.text}>Создать</Text>
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
        fontSize: 17
    },
    link: {
        fontFamily: "Montserrat",
        fontSize: 17,
        color: 'red'
    },
    icon: {
        width: 30,
        height: 30
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
    box: {
        borderWidth: 1,
        borderColor: '#000',
        width: 300,
        height: 40,
        margin: 24,
        marginBottom: 0,
        borderRadius: 7
    },
    iconButton: {
        marginTop: 20,
        marginLeft: 20
    }
});

export default NewPost;
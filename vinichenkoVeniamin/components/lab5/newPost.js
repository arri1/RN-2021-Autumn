import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {CREATE_ONE_POST} from '../lab5/getPosts';
import {GET_USER} from '../lab5/user';
import {useQuery, useMutation} from '@apollo/client';
import backIcon from '../../assets/icons/backIcon.png';

const NewPost = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('');

    const createButtonClicked = () => {
        if (text === '' || title === '') {
            alert("Fill all the fields!");
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
            alert("The post was added!");
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
                <Text style={styles.title}>Add a new post</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Title"
                    value={title}
                    onChangeText={enteredText => setTitle(enteredText)}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Text"
                    value={text}
                    onChangeText={enteredText => setText(enteredText)}
                />
                <TouchableOpacity style={styles.button} onPress={createButtonClicked}>
                    <Text style={styles.text}>Create</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#E8EAED',
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
        backgroundColor: '#5AD2F4',
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
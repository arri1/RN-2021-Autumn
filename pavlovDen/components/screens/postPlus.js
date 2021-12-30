import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { CREATE_ONE_POST, FIND_MANY_POST } from '../apollo/getPost';
import { USER } from '../apollo/queries';
import { useQuery, useMutation, useApolloClient } from '@apollo/client';

const NewPost = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [login, setLogin] = useState('');
    const [id, setId] = useState('');

    const createButtonClicked = () => {
        if (text === '' || title === '') {
            alert("Введите все данные");
        }
        else {
            onSave();
        }
    };

    const [save] = useMutation(CREATE_ONE_POST, {
        onCompleted: ({ createOnePost }) => {
            alert("Post added");
            setTitle('');
            setText('');
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
                    user: { connect: { id: id } }
                }
            }
        });
    };

    const apollo = useApolloClient();

    const { user } = useQuery(USER, {
        onCompleted: ({ user }) => {
            setLogin(user.login);
            setId(user.id);
        },
        onError: () => {
            console.log("Ошибка");
        }
    });

    const { data } = useQuery(FIND_MANY_POST, {
        pollInterval: 10,
    });

    const normalizeData = data && data.findManyPost ? data.findManyPost : [];
    const posts = normalizeData.filter(item => item.userId === id);


    return (
        <View style={styles.main}>
            <Text style={styles.title}></Text>
            <ScrollView style={styles.scroll}>
                {posts.map(item => {
                    return (
                        <View style={styles.block} key={item.id}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    );
                })}
            </ScrollView>
            <TextInput
                style={styles.box}
                placeholder=""
                value={title}
                onChangeText={enteredText => setTitle(enteredText)}
            />
            <TextInput
                style={styles.boxText}
                placeholder=""
                value={text}
                onChangeText={enteredText => setText(enteredText)}
            />
            <TouchableOpacity style={styles.button} onPress={createButtonClicked}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#30363d',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        backgroundColor: '#484f58',
        textAlign: 'center',
        fontSize: 25,
        color: 'orange',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    scroll: {
        width: 300,
        margin: 30,
        backgroundColor: '#484f58',
        color: 'white',
    },
    box: {
        backgroundColor: '#484f58',
        width: 300,
        height: 60,
        margin: 24,
        marginBottom: 0,
        borderRadius: 10,
        color: 'white',
    },
    boxText: {
        backgroundColor: '#484f58',
        width: 300,
        height: 80,
        margin: 10,
        marginBottom: 10,
        borderRadius: 10,
        color: 'white'
    },
    button: {
        backgroundColor: '#484f58',
        borderRadius: 5,
        width: 130,
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 10,
    }
});

export default NewPost;
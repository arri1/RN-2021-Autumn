import React, {useState, useCallback, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {GET_USER} from '../lab5/user';
import {FIND_MANY_POST, DELETE_ONE_POST} from '../lab5/getPosts';
import {useApolloClient, useQuery, useMutation} from '@apollo/client';
import backIcon from '../../img/backIcon.png';
import plus from '../../img/plus.png';
import edit from '../../img/editing.png';

const Lab5 = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [id, setId] = useState('');
    const apollo = useApolloClient();

    const {user} = useQuery(GET_USER, {
        onCompleted: ({ user }) => {
            setLogin(user.login);
            setId(user.id);
        },
        onError: () => {
            console.log("Что-то не так");
        }
    });

    const {data} = useQuery(FIND_MANY_POST, {
        pollInterval: 100,
    });
    const normalizeData = data && data.findManyPost ? data.findManyPost : [];
    const posts = normalizeData.filter(item => item.userId === id);

    const logoutButtonPressed = async () => {
        await AsyncStorage.clear();
        navigation.navigate("Authorization");
    };

    const [deleteItem] = useMutation(DELETE_ONE_POST, {
        onCompleted: ({deleteOnePost}) => {
            alert("Пост был удален!");
        },
        onError: ({message}) => {
            console.log(message);
        }
    });

    const deletePost = (idPost) => {
        deleteItem({
            variables:{
                where: {
                    id: idPost
                }
            }
        })
    };

    return (
        <View style={styles.main}>
            <View style={styles.view1}>
                <Text style={styles.title}>Welcome, {login}</Text>
                <TouchableOpacity 
                    style={styles.editButton}
                    onPress={() => navigation.navigate("Update")}>
                    <Image source={edit} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={logoutButtonPressed}>
                <Text style={styles.link}>Logout</Text>
            </TouchableOpacity>
            <ScrollView>
                {posts.map(item => {
                    return (
                        <View style={styles.block} key={item.id}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.text}>{item.text}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => {deletePost(item.id)}}>
                                <Text>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
            <TouchableOpacity 
                onPress={() => navigation.navigate("NewPost")}>
                <Image style={styles.newPostImage} source={plus} />
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
        fontSize: 17
    },
    link: {
        fontFamily: "Montserrat",
        fontSize: 17,
        color: 'red'
    },
    icon: {
        width: 20,
        height: 20
    },
    title:{
        color: '#000',
        fontFamily: "Montserrat",
        fontSize: 16,
        margin: 10
    },
    text:{
        color: '#000',
        fontFamily: "Montserrat",
        fontSize: 14,
        marginBottom: 0
    },
    block:{
        backgroundColor: 'white',
        borderColor: "black",
        height: 160,
        width: 350,
        margin: 24,
        marginBottom: 0,
        alignItems:"center"
    },
    newPostImage: {
        width: 40,
        height: 40
    },
    button:{
        backgroundColor: '#E88F5D',
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems:"center",
        justifyContent:"center",
        margin: 18
    }, 
    view1: {
        flexDirection: 'row'
    },
    editButton: {
        marginTop: 10
    },
    newPostButton: {
        marginBottom: 10  
    }
});

export default Lab5;
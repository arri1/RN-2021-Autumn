import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { AUTH_USER } from "./graphQL/mutation";
import {useMutation} from "@apollo/client"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Auth = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user,{loading}] = useMutation(AUTH_USER, {
        onCompleted: async ({authUser}) => {
            await AsyncStorage.setItem('token', authUser.token);
            navigation.navigate("main");
        },
        onError: ()=> {
            console.log("err");
        }
    });
    const onChangeUsername = (text) => {
        setUsername(text);
    }
    const onChangePassword = (text) => {
        setPassword(text);
    }
    const login = () => {
        user({
            variables:{
                data:{
                    login: username,
                    password: password
                }
            }
        })
    }
    if (loading) return (
        <Text>spiner...</Text>
    );
   
    return ( 
        <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={styles.mainPanel}>  
            <Text style={styles.titleText}>Sign In</Text>
            <TextInput style={styles.input} onChangeText={onChangeUsername} placeholder="Логин"/>
            <TextInput style={styles.input} onChangeText={onChangePassword}  placeholder="Пароль"/>
            <TouchableOpacity onPress={login}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signuptxt}>
                <Text style={styles.text}>dont have an Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("registration")}>
                    <Text style={styles.textsign}>Sign Un</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>        
    );
}

const styles = StyleSheet.create({
    mainPanel: {
        height: '100%',
        width: '100%',
        alignItems: "center"
    },
    text:{
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF'
    },
    textsign:{
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: "bold",
        marginLeft: 5,
    },
    titleText:{
        fontSize:32,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop:130,
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal:20,
        height:64,
        width:320,
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderRadius: 30,
        textAlignVertical:"center",
        fontSize:26,
        textAlign: 'center'
    },
    icon: {
        marginTop:70,
        height:240,
        width: 240
    },
    signuptxt:{
        flexDirection:'row',
    },
    input: {
        borderBottomWidth: 2,
        width:320,
        height: 64,
        borderColor:"#FFFF"
    }
});
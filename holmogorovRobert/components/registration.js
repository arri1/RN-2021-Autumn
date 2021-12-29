import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { REGISTER_USER } from "./graphQL/mutation";
import {useMutation} from "@apollo/client"

export default Registration = ({navigation}) => {

    const [login, setLogn] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [user,{loading}] = useMutation(REGISTER_USER,{
        onCompleted: () =>{
            Alert.alert("Registration","success", [{
                text:"OK",
                onPress: ()=>{
                    navigation.navigate('auth');
                }
            }]);       
        },
        onError: ()=> {
            console.log("err");
        }
    });
    const onChangeLogin = (text) => {
        setLogn(text);
    }
    const onChangePassword = (text) => {
        setPassword(text);
    }
    const onChangeName = (text) => {
        setName(text);
    }
    const loginn = () => {
        user({
            variables:{
                data:{
                    login: login,
                    password: password,
                    name: name
                }
            }
        })
    }
    if (loading) return (
        <Text>spiner...</Text>
    );
   
    return ( 
        <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={styles.mainPanel}>  
            <Text style={styles.titleText}>Sign UP</Text>
            <TextInput style={styles.input} onChangeText={onChangeLogin} placeholder="Login"/>
            <TextInput style={styles.input} onChangeText={onChangePassword}  placeholder="Password"/>
            <TextInput style={styles.input} onChangeText={onChangeName} placeholder="Name"/>
            <TouchableOpacity onPress={loginn}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>  
            <View style={styles.signuptxt}>
                <Text style={styles.text}>dont have an Account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("auth")}>
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
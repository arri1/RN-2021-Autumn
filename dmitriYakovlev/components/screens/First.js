import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import picture from '../images/Lab2.png';

const First = ({navigation}) => {

    //функция отправляет пользователя или на авторизацию или на основную страницу, если он не вышел из аккаунта
    const check =  async () => {
        if (await AsyncStorage.getItem('token')){
            navigation.navigate("tab")
        } else {
            navigation.navigate("auth")
        }
    }

    return ( 
        <View style={styles.main}>
            <ImageBackground source={picture} resizeMode='cover' style={styles.image}>
                <TouchableOpacity onPress={check} style={styles.btn}>
                    <Text style={styles.title}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('reg')} style={styles.btn}>
                    <Text style={styles.title}>SIGN UP</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default First

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white'
    },
    title: {
        fontSize: 50,
        fontFamily: 'Sofia-Regular',
        color: 'white',
    },
    btn: {
        borderRadius: 15,
        backgroundColor: '#0000A1',
        marginTop: 100,
        alignSelf: 'center',
        width: 250,
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
})

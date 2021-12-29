import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";
import ReactIcon from "../img/reactIcon"
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default FirstScreen = ({navigation}) => {
    const checkAsyncStorage =  async () => {
        if (await AsyncStorage.getItem('token')){
            navigation.navigate("main")
        } else {
            navigation.navigate("auth")
        }
      }
    return ( 
        <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={styles.mainPanel}>  
            <View style={styles.icon}>
                <ReactIcon/>
            </View>
            <TouchableOpacity onPress={checkAsyncStorage}>
                <Text style={styles.btn}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("registration")}>
                <Text style={styles.btn}>Sign Un</Text>
            </TouchableOpacity>
            <View>
                
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
    textM:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 32,
        color: '#FFFFFF'
    },
    titleText:{
        fontSize:32,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop:20,
    },
    btn: {
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
    }
});
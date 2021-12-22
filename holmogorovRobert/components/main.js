import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default Main = ({navigation}) => {
    return (      
        <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={styles.mainPanel}>  
            <Text style={styles.textM}>Меню заданий</Text>  
            <TouchableOpacity onPress={()=> navigation.navigate("lab1")}>
                <Text style={styles.btn}>Задание 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("lab2")}>
                <Text style={styles.btn}>Задание 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("lab3")}>
                <Text style={styles.btn}>Задание 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("lab4")}>
                <Text style={styles.btn}>Задание 4</Text>
            </TouchableOpacity>     
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        marginHorizontal:20,
        height:64,
        width:320,
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderRadius: 30,
        paddingLeft: 30,
        textAlignVertical:"center",
        fontSize:26
    },
    textM:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 32,
        color: '#FFFFFF'
    },
    mainPanel: {
        flex: 1,
        alignItems: "center"
    }
});
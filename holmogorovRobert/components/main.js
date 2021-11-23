import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default Main = ({navigation}) => {
    return (
        <View>
            <Text style={styles.btn} title="Задание 1" onPress={()=> navigation.navigate("lab1")}>Задание 1</Text>
            <Text style={styles.btn} title="Задание 2" onPress={()=> navigation.navigate("lab2")}>Задание 2</Text>
            <Text style={styles.btn} title="Задание 3" onPress={()=> navigation.navigate("lab3")}>Задание 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
    } 
});
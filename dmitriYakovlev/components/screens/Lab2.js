import React from "react"
import { View, StyleSheet, Text } from "react-native";

const Lab2 = () => {
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <View>
            
            </View>
            <View style={styles.items}>
            
            </View>
        </View>
        
    )
}

export default Lab2; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    items: {},
    title: {
        alignItems: 'center',
        justifyContent:"center",
        fontSize: 30
    }
});
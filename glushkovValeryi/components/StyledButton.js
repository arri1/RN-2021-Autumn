import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function StyleByutton({ text, onPress, style }) {
    return (
        <TouchableOpacity onPress = { onPress }>
            <View style = { style }>
                <Text style = {styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71'
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    }
})
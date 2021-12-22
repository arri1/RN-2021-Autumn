import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight} from "react-native";
import { exp } from "react-native-reanimated";

const App = ({ route }) => {
    const [bgColor, setBgColor] = useState('white');
    const changeBgColor = () => {
        setBgColor('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
    }
    return(
        <View style={[styles.mainBlock, {backgroundColor: bgColor}]}> 
            <TouchableHighlight onPress={changeBgColor}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://media.makeameme.org/created/lets-go-click.jpg',
                }}
            />
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    tinyLogo: {
        width: 200,
        height: 200,
    }
 });

export default App;

import React, { useMemo, useState } from "react";
import { Text, View , StyleSheet , TouchableOpacity } from "react-native";

const Lab3 = () => {
    const [bgColor, setBgColor] = useState('');
    const [bgColor2, setBgColor2] = useState('');
    const largeFunction = () => {
        let i = 0;
        while (i < 60000000) {
          i++;
        }
        return 'lore ipsum'
    }
    const randomColor = () => {
        let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(); 
        return color;
    }
    const changeBgColor = () => {
        const a = largeFunction();
        setBgColor(randomColor())
    }
    const useMemoFunc = useMemo(() => largeFunction,[])
    const changeBgColor2 = () => {
        const a = useMemoFunc;
        setBgColor2(randomColor())
    }
    return(
        <View style={styles.container}>
           <View style={[styles.block, {backgroundColor: bgColor}]}>
               <Text>useMemo не используется</Text>
               <TouchableOpacity style={styles.btn} onPress={changeBgColor}>
                   <Text style={styles.text}>Нажми, чтобы изменить цвет</Text>
               </TouchableOpacity>
               </View> 
           <View style={[styles.block, {backgroundColor: bgColor2}]}>
               <Text>useMemo используется</Text>
               <TouchableOpacity style={styles.btn} onPress={changeBgColor2}>
                   <Text>Нажми, чтобы изменить цвет</Text>
               </TouchableOpacity>
               </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        flex: 1,
        margin: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#0AA3F2',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    text: {
    }
})

export default Lab3;
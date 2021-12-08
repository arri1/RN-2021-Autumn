import React, {useState, useMemo, useCallback} from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default Lab3 = () => {
    const whileFunc = () => {
        let i = 0;
        while (i < 50000000) {
          i++;
        }
        return 1;
    }
    const onPressHandler = () => {
        const count = func;
        setNum(num+1)
    };
    const onPressHandlerSecond = () => {
        const count = whileFunc()
        setNum(num+1)
    };
    const func = useMemo(whileFunc,[]);
    const [num, setNum] = useState(0)
    return (
        <View style={styles.mainBlock}>  
            <View style={styles.box}>
                <Text style={styles.text}>React Native likes v1</Text>
                <Text >React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. </Text>
                <View style={styles.like}>
                    <Text>{num}</Text>
                    <TouchableOpacity style={styles.button} onPress={onPressHandlerSecond}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>   
            </View> 
            <View style={styles.box}>
                <Text style={styles.text}>React Native likes v2</Text>
                <Text >React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. </Text>
                <View style={styles.like}>
                    <Text >{num}</Text>
                    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>   
            </View>   
        </View>
  );
}

const styles = StyleSheet.create({
    mainBlock: { 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
      },
    box: {
        height:140,
        width: "80%",
        backgroundColor:"#F2F2F2",
        borderRadius: 35,
        marginTop: 5,
        paddingHorizontal: 20,
        paddingVertical:15
    },
    button: {
        height: 20,
        width: 20,
        backgroundColor:"#42ED78",
        alignItems: "center",
        justifyContent: "center"
    },
    like: {
        flexDirection: 'row',
        alignSelf: "flex-end",
        marginTop: 5
    },
    text: {
        textAlign: 'center'
    }
    
});

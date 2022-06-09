import React, { useState } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    SafeAreaView, 
    TouchableOpacity,
    Text,
} from 'react-native';

const colArr = ["#FF0000","#FF7400","#FFE800","#32FF00","#00FFCD","#0C00FF","#B600FF"];
const Colour = () => {
    colNum =  Math.floor(Math.random() * colArr.length);
    return colArr[colNum];
};

const Lab1 = () =>{
    const [backColor, setColor] = useState(Colour())
    return(
        <SafeAreaView style = {{...styles.main, backgroundColor: backColor}}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>  setColor(Colour())}
                ><Text style={styles.buttonText}>Нажми меня</Text></TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        marginTop: 340,
        height: 60,
        width: 180,
        backgroundColor: '#D1A7A0',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText:{
        fontFamily: 'Roboto',
        fontSize: 20,
        color:'#000000',
    },
});

export default Lab1;

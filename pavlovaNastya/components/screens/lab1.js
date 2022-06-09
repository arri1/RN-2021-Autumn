import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';

const colArr = ["#FF0000","#FF7400","#FFE800","#32FF00","#00FFCD","#0C00FF","#B600FF"];
const Colour = () => {
    colNum =  Math.floor(Math.random() * colArr.length);
    return colArr[colNum];
};

const Lab1 = () =>{
    const [backColor, setColor] = useState(Colour())
    return(
        <SafeAreaView style = {{...styles.main, backgroundColor: backColor}}>
            <Button  
                title = "Нажми меня"
                onPress={() => setColor(Colour())}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Lab1;

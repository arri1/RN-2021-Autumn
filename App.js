import React, { useState } from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';

const colArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const Colour = () => {
    colNum = Math.floor(Math.random() * colArr.length);
    return colArr[colNum];
};

const App = () => {
    const [backColor, setColor] = useState(Colour())
    return (
        <SafeAreaView style={{ ...styles.main, backgroundColor: backColor }}>
            <Button
                title="TAP ME"
                onPress={() => setColor(Colour())}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
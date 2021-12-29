import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Zagolovok = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>SECOND WORK</Text>
        </View>
    )
}

export default Zagolovok;

const styles = StyleSheet.create({
    
    title: {
        fontSize: 36,
        textAlign: 'center',
        fontFamily: 'Sofia-Regular'
    }
})
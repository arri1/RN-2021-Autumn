import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Zagolovok = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Список дел</Text>
        </View>
    )
}

export default Zagolovok;

const styles = StyleSheet.create({
    header: {
        height: 80,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    }
})
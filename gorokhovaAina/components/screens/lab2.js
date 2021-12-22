import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

const Lab2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then(({data: newData}) => {
                setData(newData);
            })
            .catch(() => {});
    }, []);

    const content = () => {
        return (
            <ScrollView>
                {data.map(item => {
                    return (
                        <View key={item.id}>
                            <Text style={styles.title}>{item.id}. {item.title}</Text>
                            <Text style={styles.text}>{item.body}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        );
    };

    return (
        <View style={styles.main}>
            {data ? content() : <ActivityIndicator color={'blue'} />}
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#fdf5e6',
        flex: 1
    },
    title:{
        color: '#800000',
        fontFamily: "Montserrat",
        fontSize: 19
    },
    text:{
        color: '#000',
        fontFamily: "Montserrat",
        fontSize: 14,
        margin: 10
    }
});

export default Lab2;
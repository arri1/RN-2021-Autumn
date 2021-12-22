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
                        <View style={styles.block} key={item.id}>
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
        backgroundColor: '#FFE6DC',
        flex: 1
    },
    title:{
        color: '#000',
        fontFamily: "Montserrat",
        fontSize: 16,
        margin: 15,
        marginBottom: 0
    },
    text:{
        color: '#000',
        fontFamily: "Montserrat",
        fontSize: 14,
        marginTop: 5,
        margin: 15,
        marginBottom: 0
    },
    block:{
        backgroundColor: 'white',
        borderColor: "black",
        height: 160,
        margin: 24,
        marginBottom: 0
    }
});

export default Lab2;
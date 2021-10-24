import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const Lab2 = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <ScrollView style = {styles.content}>
            { todos.map(item => <Text style = {styles.item} key = {item.id}>{ item.title }</Text>) }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 15,
        height: 50, 
        width: '90%',
        backgroundColor: "#ff8000",
        borderRadius: 15,
        fontSize: 15
    },
    content: {
        margin: 0,
        padding: 0,
        width: '100%',
        backgroundColor: '#000000'
    },
});

export default Lab2;
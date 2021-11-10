import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View  } from 'react-native';
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
      <SafeAreaView style = {styles.main}>
        <View style = {styles.scroll}>
          <ScrollView style = {styles.content}>
              { todos.map(item => <Text style = {styles.item} key = {item.id}>{ item.title }</Text>) }
          </ScrollView>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
      marginTop: '5%',
      marginBottom: '0%',
      margin: '5%',
      padding: 15,
      height: 50, 
      width: '90%',
      backgroundColor: "#D7FCD4",
      borderRadius: 10,
      fontSize: 15
    },
    content: {
      backgroundColor: '#545454'
    },
    scroll: {
      width: '100%',
      height: '85%', 
      backgroundColor: '#545454'
    },
    main: {
      margin: 0,
      padding: 0,
      height: '100%', 
      backgroundColor: '#545454'
    }
});

export default Lab2;
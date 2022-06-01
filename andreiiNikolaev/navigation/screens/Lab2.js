import React, { useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, StyleSheet, ScrollView} from 'react-native';

export default function Lab2({}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Вместо axios использован fetch. Код написан в соответствии с рекомендованным шаблоном использования fetch(reactnative версии 0.68) от официального сайта React Native https://reactnative.dev/docs/network#using-fetch .
    const ToDoList = () => {
      return fetch('https://my-json-server.typicode.com/Andrey1291/tasks/db')
        .then((response) => response.json())
        .then((json) => {
          return json.task;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    useEffect(() => {
      ToDoList();
    }, []);

    return (      
       <ScrollView style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
       </ScrollView>      
    );
  };

  // Немного изменены стили.
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'navajowhite'
    },    
    item: {
      marginTop: '3%',     
      width: '100%',
      padding: 20,      
      height: 60,
      backgroundColor: 'tan',
      borderRadius: 10,
      fontSize: 15     
    },   
  });



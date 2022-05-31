import React, { useState, useEffect} from 'react';
import { Text,  StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

export default function Lab2({}) {
    const [data, dataSet] = useState([]);

    useEffect(() => {
      axios
        .get('https://my-json-server.typicode.com/Andrey1291/tasks/task')
        .then(response => {
          dataSet(response.data);
        })
        .catch(() => {});
    });

    return (
      <ScrollView style={styles.container}>
        {data.map(item => (
          <Text style={styles.item} key={item.id}>
            {item.title}
          </Text>
        ))}
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightyellow'
    },    
    item: {
      marginTop: '5%',     
      width: '100%',
      padding: 15,
      height: 60,
      backgroundColor: '#FFFF99',
      fontSize: 20,
    },
  });



import React, { useState, useEffect} from 'react';
import { Text,  StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

export default function Lab2({navigation}) {
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
      <ScrollView style={styles.from}>
        {data.map(item => (
          <Text style={styles.item} key={item.id}>
            {item.title}
          </Text>
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      marginTop: '5%',     
      width: '100%',
      padding: 15,
      height: 60,
      backgroundColor: '#FFFF99',
      fontSize: 20,
    },
  });


    
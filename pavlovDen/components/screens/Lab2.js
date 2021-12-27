import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

const Lab2 = () => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
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
    marginBottom: '0%',
    margin: '5%',
    width: '90%',
    padding: 15,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 30,
    fontSize: 15,
  },
  form: {
      margin: 0,
      padding: 0,
      width: '100%',
      backgroundColor: '#000000',
    },
});

export default Lab2;
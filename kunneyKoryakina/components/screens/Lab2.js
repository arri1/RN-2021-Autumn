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
    <ScrollView>
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
    marginTop: 15,
    marginBottom: 10,
    margin: 20,
    width: 350,
    padding: 15,
    height: 50,
    backgroundColor: '#E6E6FA',
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#444586',
  },
});

export default Lab2;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

const Lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data: newData }) => {
        setData(newData);
      })
      .catch(() => { });
  }, []);

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'black'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: 'pink',
  },
  item: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  text: {
    color: 'black'
  }
});

export default Lab2;
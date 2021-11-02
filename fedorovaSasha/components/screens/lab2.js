import React, {useState, useEffect} from 'react';
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
      .get('https://jsonplaceholder.typicode.com/comments?postId=1&postId=2')
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
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>{item.body}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'red'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#5CBDDB',
  },
  item: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    borderColor: '#C446DB',
    borderWidth: 2,
    backgroundColor: '#E6AF77',
  },
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    marginLeft: 10,
  },
  email: {
    marginTop: 10,
    textAlign: 'right',
  },
});

export default Lab2;

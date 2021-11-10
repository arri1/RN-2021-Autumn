import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
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
              <Text style={styles.text}>{item.username} {item.name}</Text>
              <Text>Address: {item.address.city}, {item.address.street}, {item.address.suite}</Text>
              <Text>email: {item.email}</Text>
              <Text>phone: {item.phone}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: '#52C0DE'}]}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'red'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
    height: '100%'
  },
  item: {
    backgroundColor: '#BCEEEB',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 390,
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5

  },
  container: {
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52C0DE'
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default lab2;
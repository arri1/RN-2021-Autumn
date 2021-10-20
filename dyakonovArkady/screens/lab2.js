import React, {useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
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
              <Text style={styles.container}>{item.username} {item.name}</Text>
              <Text style={styles.address}>City: {item.address.city}, street: {item.address.street}, suite: {item.address.suite}</Text>
              <Text style={styles.email}>email: {item.email}</Text>
              <Text style={styles.phone}>phone: {item.phone}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  container: {
    fontSize: 15,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
  },
});

export default lab2;
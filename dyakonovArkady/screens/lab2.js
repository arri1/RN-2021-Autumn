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
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#BCEEEB'
  },
  container: {
    marginBottom: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92D6BE'
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default lab2;
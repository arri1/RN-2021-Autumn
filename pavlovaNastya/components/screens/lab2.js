import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D1A7A0',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2E0BF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
  },
});
const Lab2 = () => {
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
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>{item.email}</Text>
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

export default Lab2;
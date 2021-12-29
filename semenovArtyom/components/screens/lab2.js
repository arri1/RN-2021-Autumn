import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#1F1A24'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.9
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.6
  }
});
const Lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
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
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.body}</Text>
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

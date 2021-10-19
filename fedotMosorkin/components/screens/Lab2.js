import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
}
from 'react-native';
//import axios from 'axios';

const Lab2 = ({navigation}) => {
  const [data, setData] = useState([]);

  /*useEffect(() => {
    axios.get('https://my-json-server.typicode.com/MidnightYKT/json/posts')
      .then(({data: newData}) => {
        setData(newData);
      })
      .catch(() => {});
  }, []);*/

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.info}>{item.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainBlock}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#95A3B3',
    alignItems: 'center',
  },
  mainBlock: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    marginTop: 10,
    fontSize: 15,
  },
});

export default Lab2;
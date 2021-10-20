import React, {useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
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
  },
});

function Checks(a) {
  if (a === 'false') return 'false'
  else return 'true'
}

const Lab2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(({data: newData}) => {
        setData(newData);
      })
      .catch(() => {});
  }, []);

  const content = () => {
    return (
      <ScrollView>{
        data.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>Checks({item.completed})</Text>
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
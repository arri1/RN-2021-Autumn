import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Zagolovok from '../routers/Zagolovok';

const Lab2 = () => {
  const [data, setData] = useState([]);
  const [color, setColor] = useState('white');

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
      <ScrollView>
        <Zagolovok/>{
          data.map(item => {
            if (item.id <= 15){
              if (item.completed === false)
                return (
                  <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: 'red'}]}> 
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                )
              if (item.completed === true)
                return (
                  <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: 'green'}]}> 
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                )        
            }     
          })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'orange'} />}
    </View>
  );
};

export default Lab2;


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
    fontWeight: 'bold'
  },
  text: {
    marginTop: 10,
  },
});
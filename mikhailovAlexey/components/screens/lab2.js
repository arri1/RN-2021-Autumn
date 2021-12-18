import React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import styles from '../styles/styles'

const Lab2 = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const per = res.data;
      setPersons(per)
    }).catch(() => {})
  })

  return (
    <ScrollView>
      <View style={ [styles.container, styles.containerBackgroundColor] }>
        <View style={{ height: 10 }}></View>
        {persons.map(item => {
          return (
            <View key={item.id} style={styles.boxSize}>
              <Text style={styles.boxTextStyle}>Name : {item.name}</Text>
              <Text style={styles.boxTextStyle}>Email : {item.email}</Text>
              <Text style={styles.boxTextStyle}>Website url : {item.website}</Text>
              <Text style={styles.boxTextStyle}>Company : { item.company.name}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Lab2;
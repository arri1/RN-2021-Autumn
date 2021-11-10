import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const rnLab2 = () => {
  const [data, setData] = useState([]);

  const getData = async = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        { data.map(item => <Text style = {styles.rnItem} key = {item.id}>{ item.title }</Text>) }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnItem: {
    height: 80,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row'
  }
});

export default rnLab2;

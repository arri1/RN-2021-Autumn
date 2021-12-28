import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { loadItems, checkItem } from "../../store/postData";

const Lab2 = () => {
  const data = useSelector(state => state.posts.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(({ data }) => {
          dispatch(loadItems(data));
        })
        .catch(() => { });
    }
  }, [dispatch]);

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.item, item.checked ? { backgroundColor: '#4F2967' } : undefined,]}
              onPress={() => {
                dispatch(checkItem(item.id));
              }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'black'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#AC99C0'
  },
  item: {
    padding: 20,
    marginBottom: 5,
    backgroundColor: '#9D88B4',
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: 'white'
  },
  text: {
    color: 'white'
  }
});

export default Lab2;
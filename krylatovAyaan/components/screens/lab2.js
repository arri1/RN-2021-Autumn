import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {loadItems, checkItem} from '../posts/posData';

const Lab2 = () => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(({data}) => {
          dispatch(loadItems(data));
        })
        .catch(() => {});
    }
  }, [dispatch]);
  const Todo = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                item.checked ? {backgroundColor: '#476DD5'} : undefined,
              ]}
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
        {data ? Todo() : <ActivityIndicator color={'black'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#FFBA73',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    left: 5,
    fontSize: 12,
    fontFamily: 'Gotham pro',
    opacity: 1,
  },
  text: {
    fontFamily: 'Roboto',
  },
});

export default Lab2;

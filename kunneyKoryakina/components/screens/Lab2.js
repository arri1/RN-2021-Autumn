import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../../store/tasks';

const Lab2 = () => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
            return (
              <TouchableOpacity
              key={item.id}
              style={[
                styles.item,
                item.checked ? {backgroundColor: '#436D9F'} : undefined,
              ]}
              onPress={() => {
                dispatch(checkItem(item.id));
              }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data ? content() : <ActivityIndicator color={'red'} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  item: {
    padding: 0,
    borderRadius: 0,
    marginBottom: 20,
    borderColor: '#444586',
    borderWidth: 2,
    backgroundColor: '#E6E6FA',
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 0,
    marginLeft: 10,
    color: 'black'
  },
  email: {
    marginTop: 20,
    textAlign: 'right',
  },
});

export default Lab2;
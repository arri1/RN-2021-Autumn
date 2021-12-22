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
                item.checked ? {backgroundColor: '#8F401A'} : undefined,
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
    backgroundColor: '#CCF6CF',
  },
  item: {
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    borderColor: '#78C25D',
    borderWidth: 2,
    backgroundColor: '#C27E5D',
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
    color: 'white',
  },
  text: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
    color: 'white',
  },
  email: {
    textAlign: 'right',
    color: 'white',
  },
});

export default Lab2;

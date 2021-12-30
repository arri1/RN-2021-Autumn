import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../../store/data';

const Lab2 = () => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();
  const content = () => {
    return (
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.title}>Task</Text>
          {data.map(item => {
            return !item.checked ? (
              <TouchableOpacity
                key={item.id}
                style={[styles.item]}
                onPress={() => {
                  dispatch(checkItem(item.id));
                }}>
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            ) : undefined;
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'white'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    marginLeft: 44,
    padding: 15,
    height: 100,
    width: 323,
    backgroundColor: '#484f58',
    borderRadius: 30,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#30363d',
    height: '100%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    marginTop: 20,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Lab2;
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { checkItem } from '../store/tasks';

import styles from '../styles/styles';

const Lab2 = () => {
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const content = () => (
    <View style={[styles.container]}>
      <ScrollView style={styles.scroll}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.boxSize,
              item.checked ? { backgroundColor: '#2C2B2B' } : undefined,
            ]}
            onPress={() => {
              dispatch(checkItem(item.id));
            }}
          >
            <Text style={styles.boxTextStyle}>
              Name :
              {item.name}
            </Text>
            <Text style={styles.boxTextStyle}>
              Email :
              {item.email}
            </Text>
            <Text style={styles.boxTextStyle}>
              Website url :
              {item.website}
            </Text>
            <Text style={styles.boxTextStyle}>
              Phone :
              {item.phone }
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color="red" />}
    </View>
  );
};

export default Lab2;

import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { checkItem } from '../store/tasks';

import styles from '../styles/styles';

const Lab4 = () => {
  const data = useSelector((state) => state.data.value);
  const selectedItems = data?.filter((item) => item.checked);
  const dispatch = useDispatch();
  const checked = selectedItems?.length;
  return (
    <View style={styles.container}>
      <View style={[styles.boxSize, { 
        height: 35, width: 250, top: 10 
      }]}
      >
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.boxTextStyle, styles.boldText]}>
            length of checked items:
          </Text>
          <Text style={styles.boxTextStyle}>
            {checked}
          </Text>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        {selectedItems?.map((item) => (
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
}

export default Lab4;

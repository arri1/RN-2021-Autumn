import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  scroll: {
    margin: 15,
  },
  item: {
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data?.filter(item => item.checked);
  return (
    <View>
      <ScrollView style={styles.scroll}>
        {selectedItems?.map(item => {
          return (
            <View style={styles.item} key={item.id}>
              <Text key={item.id}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Lab4;

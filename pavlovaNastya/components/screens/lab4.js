import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const selectedItems = data?.filter(item => item.checked);
  return (
    <View style={styles.container}>
      <ScrollView>
        {selectedItems?.map(item => {
          return (
            <View style={styles.item} key={item.id}>
              <Text  style={styles.text} key={item.id}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2E0BF',
    },
    item: {
        backgroundColor: '#D1A7A0',
        color: '#000000',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Lab4;
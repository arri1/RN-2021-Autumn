import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../../store/tasks';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D1A7A0',
    color: '#000000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2E0BF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
  },
});
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
              item.checked ? {backgroundColor: 'green'} : undefined,
            ]}
            onPress={() => {
              dispatch(checkItem(item.id));
            }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

export default Lab2;
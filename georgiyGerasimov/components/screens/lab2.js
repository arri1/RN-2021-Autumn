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
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
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

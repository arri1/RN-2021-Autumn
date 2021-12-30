import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../../store/reducer';

const Lab4 = () => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();
  const selectedItems = data?.filter(item => item.checked);
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.title}>Выполненные дела</Text>
        {selectedItems?.map(item => {
          return item.checked ? (
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#7B47E9',
  },
  text: {
    fontSize: 20,
  },
  item: {
    marginTop: 24,
    marginLeft: 44,
    padding: 15,
    height: 100,
    width: 323,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default Lab4;

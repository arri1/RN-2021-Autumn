import React, {useState, useMemo, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';

import axios from 'axios';

const sum = n => {
  return n + n;
};

const Lab3 = ({navigation}) => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(false);

  const countSum = useMemo(() => sum(num), [num]);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/MidnightYKT/json/posts')
      .then(({data: newData}) => {
        setData(newData);
      })
      .catch(() => {});
  }, []);

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text
                style={{color: isGreen ? 'green' : 'white', fontWeight: 'bold', fontSize: 18}}
                onPress={() => setIsGreen(!isGreen)}>
                {item.title}
              </Text>
              <Text style={styles.info}>{item.body}</Text>
              <Text>{countSum}</Text>
              <Button
                title="+"
                style={styles.button}
                onPress={() => setNum(num + 1)}
              />
              <Button
                title="clear"
                color="maroon"
                style={styles.button}
                onPress={() => setNum(0)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.mainBlock}>
      {data ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#95A3B3',
    alignItems: 'center',
    margin: 15,
  },
  mainBlock: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  info: {
    marginTop: 10,
    fontSize: 15,
  },
  button: {
    marginBottom: 10,
  },
});

export default Lab3;

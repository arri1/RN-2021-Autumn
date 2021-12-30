import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import {
  useQuery,
} from '@apollo/client';

import styles from '../styles/styles';

import Loading from './loading';

import { getUsers } from '../gql/queries';

const Lab5 = () => {
  const [txt, setTxt] = React.useState('');
  const [str, setStr] = React.useState('');
  const { data, loading } = useQuery(getUsers, {
    variables: { log: str },
  });

  const search = () => {
    setStr(txt);
  };

  if (loading === true) return Loading 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.findManyUser.map((user) => (
          <View key={user.login} style={[styles.boxSize, { height: 50 }]}>
            <Text style={styles.boxTextStyle}>
              login :
              {user.login}
            </Text>
            <Text style={styles.boxTextStyle}>
              name :
              {user.name === null ? 'empty' : user.name }
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 370}}>
        <TextInput onChangeText={(text) => setTxt(text)} placeholder="Write here" placeholderTextColor="#fff" style={[styles.textArea, {width: 250}]} />
        <TouchableOpacity
          onPress={search}
          style={[styles.button, {
            backgroundColor: '#454545', marginLeft: 20, width: 100, height: 50, borderWidth: 1, borderColor: 'white',
          }]}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.boxSize, {
        marginTop: 10, height: 50, borderWidth: 1, borderColor: 'white',
      }]}
      >
        <Text style={[styles.boxTextStyle, { textAlign: 'center' }]}>
          Count of users:
          {' '}
          {data.findManyUser.length}
        </Text>
      </View>
    </View>
  );
}

export default Lab5;

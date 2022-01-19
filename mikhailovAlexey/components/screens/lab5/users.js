import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity, TextInput,
} from 'react-native';
import {
  useQuery,
} from '@apollo/client';

import styles from '../../styles/styles';

import Loading from './loading';

import { getUsers } from '../../gql/queries';

function Users({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={(text) => setTxt(text)}
            style={{
              backgroundColor: 'white',
              height: 35,
              width: 150,
              borderRadius: 5,
              fontSize: 20,
              fontFamily: 'Montserrat',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          />
          <TouchableOpacity
            onPress={() => search()}
            style={{
              marginLeft: 10,
              height: 35,
              width: 35,
              borderRadius: 5,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={[styles.buttonText, {
              color: 'black',
              fontSize: 24,
              margin: 0,
              padding: 0,
            }]}
            >
              O
            </Text>
          </TouchableOpacity>
        </View>
      ),
    }, navigation);
  });
  const [txt, setTxt] = React.useState('');
  const [str, setStr] = React.useState('');
  const { data, loading } = useQuery(getUsers, {
    variables: { log: str },
  });

  const search = () => {
    setStr(txt);
  };

  if (loading) return Loading();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.findManyUser.map((user) => (
          <TouchableOpacity
            key={user.login}
            style={[styles.boxSize, {
              height: 60,
            }]}
            onPress={() => navigation.navigate('User', {
              login: user.login,
            })}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                login :
              </Text>
              <Text style={styles.boxTextStyle}>
                {user.login}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                name :
              </Text>
              <Text style={styles.boxTextStyle}>
                {user.name === null ? 'empty' : user.name }
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[styles.boxSize, {
        marginTop: 10, height: 50, alignItems: 'center',
      }]}
      >
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.boxTextStyle, styles.boldText]}>
            Count of users:
          </Text>
          <Text style={styles.boxTextStyle}>
            {data.findManyUser.length}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Users;

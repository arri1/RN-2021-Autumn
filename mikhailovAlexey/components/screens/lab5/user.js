import React from 'react';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import {
  useQuery,
  useMutation,
} from '@apollo/client';

import { auth } from '../../store/tasks';
import styles from '../../styles/styles';
import Loading from './loading';
import { getUser } from '../../gql/queries';
import { DELPOST } from '../../gql/mutations';

function User({ route, navigation }) {
  const { login } = route.params;
  const [mode, setMode] = React.useState(false);

  const { data, loading } = useQuery(getUser, {
    variables: { log: login },
    pollInterval: 250,
  });
  React.useEffect(() => {
    auth.getState() === login ? setMode(true) : setMode(false);
    navigation.setOptions({
      title: login,
      headerRight: () => (mode
        ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('CreatePost', { id: data.findOneUser.id })}
            style={styles.topRightButton}
          >
            <Text style={[styles.buttonText, {
              color: 'black', fontSize: 16, margin: 0, padding: 0,
            }]}
            >
              CreatePost
            </Text>
          </TouchableOpacity>
        ) : null
      ),
    }, navigation);
  });

  const [delpost] = useMutation(DELPOST, {
    onCompleted: () => {
      console.log('Пост успешно удален');
    },
    onError: () => {
      console.log('Что то пошло не так');
    },
  });
  const deletePost = (postid) => {
    delpost({
      variables: { where: { id: postid } },
    });
  };
  // <TouchableOpacity style={styles.postEditButton} ><Text style={{fontSize: 16}}>E</Text></TouchableOpacity>
  const adminButtons = (post) => (
    <View style={{ right: 5 }}>
      <TouchableOpacity style={[styles.postEditButton, { right: 0 }]} onPress={() => deletePost(post.id)}><Text style={{ fontSize: 16 }}>D</Text></TouchableOpacity>
    </View>
  );
  return (
    loading ? Loading()
      : (
        <View style={[styles.container, { zIndex: 1 }]}>
          <View style={[styles.boxSize, { height: 120, backgroundColor: '#454545' }]}>
            <Text style={styles.boxTextStyle}>
              UserData :
            </Text>
            <Text style={styles.boxTextStyle}>
              id :
              {data.findOneUser.id}
            </Text>
            <Text style={styles.boxTextStyle}>
              login :
              {data.findOneUser.login}
            </Text>
            <Text style={styles.boxTextStyle}>
              name :
              {data.findOneUser.name === null ? 'empty' : data.findOneUser.name }
            </Text>
            <Text style={styles.boxTextStyle}>
              group :
              {data.findOneUser.group === null ? 'empty' : data.findOneUser.group }
            </Text>
          </View>
          <Text style={[styles.boxTextStyle, { fontSize: 30 }]}>Posts</Text>
          <ScrollView style={styles.scroll}>
            {data.findOneUser.posts.length > 0 ? data.findOneUser.posts.map((post) => (
              <View key={post.title} style={[styles.boxSize, { height: 75 }]}>
                {
                  mode ? adminButtons(post) : null
                }
                <Text style={styles.boxTextStyle}>
                  login :
                  {login}
                </Text>
                <Text style={styles.boxTextStyle}>
                  title :
                  {post.title}
                </Text>
                <Text style={styles.boxTextStyle}>
                  text :
                  {post.text === null ? 'empty' : post.text }
                </Text>
              </View>
            )) : <Text>This user nothing posted yet</Text>}
          </ScrollView>
        </View>
      )

  );
}

export default User;

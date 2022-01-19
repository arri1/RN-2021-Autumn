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

const User = ({ route, navigation }) => {
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
            onPress={() => navigation.navigate('CreatePost', {
              id: data.findOneUser.id,
            })}
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
  const adminButtons = (post) => (
    <View style={{ right: 5 }}>
      <TouchableOpacity
        style={[styles.postEditButton, {
          right: 0,
        }]}
        onPress={() => deletePost(post.id)}
      >
        <Text style={{ fontSize: 16 }}>
          D
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    loading ? Loading()
      : (
        <View style={[styles.container, { zIndex: 1 }]}>
          <View style={[styles.boxSize, {
            height: 140, backgroundColor: '#454545',
          }]}
          >
            <Text style={[styles.boxTextStyle, styles.boldText, {
              fontSize: 20,
            }]}
            >
              UserData :
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                id :
              </Text>
              <Text style={styles.boxTextStyle}>
                { data.findOneUser.id}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                login :
              </Text>
              <Text style={styles.boxTextStyle}>
                {data.findOneUser.login}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.boxTextStyle, styles.boldText]}>
                name :
              </Text>
              <Text style={styles.boxTextStyle}>
                {
                  data.findOneUser.name === null
                    ? 'empty'
                    : data.findOneUser.name
                }
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Text
                style={[styles.boxTextStyle, styles.boldText]}
              >
                group :
              </Text>
              <Text style={styles.boxTextStyle}>
                {
                  data.findOneUser.group === null
                    ? 'empty'
                    : data.findOneUser.group
                }
              </Text>
            </View>
          </View>
          <Text style={[styles.boxTextStyle, styles.boldText, {
            fontSize: 30,
            color: '#454545',
          }]}
          >
            Posts
          </Text>
          <ScrollView style={styles.scroll}>
            {data.findOneUser.posts.length > 0
              ? data.findOneUser.posts.map((post) => (
                <View
                  key={post.title}
                  style={[styles.boxSize, { height: 75 }]}
                >
                  {mode ? adminButtons(post) : null}
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.boxTextStyle, styles.boldText]}>
                      login :
                    </Text>
                    <Text style={styles.boxTextStyle}>
                      {login}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.boxTextStyle, styles.boldText]}>
                      title :
                    </Text>
                    <Text style={styles.boxTextStyle}>
                      {post.title}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.boxTextStyle, styles.boldText]}>
                      text :
                    </Text>
                    <Text style={styles.boxTextStyle}>
                      {post.text}
                    </Text>
                  </View>
                </View>
              )) : (
                <Text style={[styles.boxTextStyle, styles.boldText, {
                  color: "#454545"
                }]}
                >
                  This user nothing posted yet
                </Text>
              )}
          </ScrollView>
        </View>
      )

  );
}

export default User;

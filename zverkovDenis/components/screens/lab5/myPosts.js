import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {FIND_MANY_POST, USER} from '../../gqls/qwery/queries';
import {CREATE_ONE_POST, DELETE_ONE_POST} from '../../gqls/qwery/mutations';
import LinearGradient from 'react-native-linear-gradient';
import {useQuery, useMutation} from '@apollo/client';

const MyPosts = props => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [postId, setPostId] = useState('');

  const [isPostEdit, setPostEdit] = useState(false);

  const [userId, setUserId] = useState('');
  const [userLogin, setUserLogin] = useState('');

  const {user} = useQuery(USER, {
    onCompleted: ({user}) => {
      setUserLogin(user.login);
      setUserId(user.id);
    },
  });

  const {data} = useQuery(FIND_MANY_POST, {
    variables: {
      where: {
        userId: {
          equals: userId,
        },
      },
    },
    pollInterval: 500,
  });

  const [post] = useMutation(CREATE_ONE_POST, {
    onCompleted: ({createOnePost}) => {
      setTitle('');
      setText('');
    },
  });

  const createPost = () => {
    if (title != '' && text != '') {
      post({
        variables: {
          data: {
            title,
            text,
            user: {connect: {login: userLogin}},
          },
        },
      });
    }
  };

  const [delPost] = useMutation(DELETE_ONE_POST, {
    onCompleted: ({deleteOnePost}) => {
      setPostEdit(false);
    },
  });

  const deletePost = () => {
    delPost({
      variables: {
        where: {
          id: postId,
        },
      },
    });
  };

  const selectPost = id => {
    setPostId(id);
    setPostEdit(true);
  };

  return (
    <LinearGradient style={styles.main} colors={['#6991F5', '#ffffff']}>
      <View>
        {!isPostEdit ? (
          <View>
            <View style={[styles.inputText, {marginTop: 30}]}>
              <TextInput
                style={styles.text}
                placeholder="Title"
                onChangeText={text => setTitle(text)}>
                {title}
              </TextInput>
            </View>

            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                placeholder="Text"
                onChangeText={text => setText(text)}>
                {text}
              </TextInput>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.text} onPress={createPost}>
                Add Post
              </Text>
            </TouchableOpacity>

            <ScrollView style={styles.postsViev}>
              {data != null ? (
                data.findManyPost.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.post}
                      onPress={() => selectPost(item.id)}>
                      <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <Text></Text>
              )}
            </ScrollView>
          </View>
        ) : (
          <View style={[styles.viewBox]}>
            <View style={[styles.inputText, {marginTop: 30}]}>
              <TextInput
                style={styles.text}
                placeholder="Title"
                onChangeText={text => setTitle(text)}>
                {title}
              </TextInput>
            </View>

            <View style={styles.inputText}>
              <TextInput
                style={styles.text}
                placeholder="Text"
                onChangeText={text => setText(text)}>
                {text}
              </TextInput>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.text} onPress={() => setPostEdit(false)}>
                Update Post
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.text} onPress={() => setPostEdit(false)}>
                Cansel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.text} onPress={deletePost}>
                Delite post
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {height: '100%'},
  addButton: {
    backgroundColor: '#A8C75A',
    height: 45,
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    alignItems: 'center',
  },

  text: {
    fontSize: 15,
  },

  inputText: {
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    margin: 5,
    marginTop: 10,
  },
  postsViev: {
    fontSize: 18,
    marginTop: 5,
    padding: 10,
  },
  post: {
    backgroundColor: '#ffffff',
    fontSize: 18,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default MyPosts;

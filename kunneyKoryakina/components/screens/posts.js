import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import {POST, GET_POSTS, USER, FIND_MANY_POST} from '../grphql/qrs';
import {CREATE_ONE_POST, DELETE_ONE_POST, UPDATE_ONE_POST,} from "../grphql/mutations";

import {useQuery, useMutation, useApolloClient} from '@apollo/client';

const MyPosts = props => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [titleUpdate, setTitleUpdate] = useState('');
    const [textUpdate, setTextUpdate] = useState('');
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
  
    const [updPost] = useMutation(UPDATE_ONE_POST, {
      onCompleted: ({updateOnePost}) => {
        console.log(' POST EDIT!');
        ToastAndroid.show('Redacted !', ToastAndroid.SHORT);
      },
      onError: ({message}) => {
        console.log('DONT POST EDIT!');
        console.log(message);
      },
    });
  
    const postEditValidate = () => {
      if (titleUpdate === '') {
        ToastAndroid.show('Title empty !', ToastAndroid.SHORT);
        return false;
      }
      if (textUpdate === '') {
        ToastAndroid.show('Text empty !', ToastAndroid.SHORT);
        return false;
      }
      return true;
    };
  
    const updatePost = () => {
      if (postEditValidate()) {
        updPost({
          variables: {
            where: {
              id: postId,
            },
            data: {
              title: {set: titleUpdate},
              text: {set: textUpdate},
            },
          },
        });
      }
    };
  
    const selectPost = (id, title, text) => {
      setPostId(id);
      setTitleUpdate(title);
      setTextUpdate(text);
      setPostEdit(true);
    };
  
    return (
        <View>
          {!isPostEdit ? (
            <View style={[styles.viewBox]}>
              <View style={[styles.inputText, {marginTop: 30}]}>
                <TextInput
                  style={styles.text}
                  placeholder="Title"
                  onChangeText={setTitle}
                  value={title}
                />
              </View>
  
              <View style={styles.inputText}>
                <TextInput
                  style={styles.text}
                  placeholder="Text"
                  onChangeText={setText}
                  value={text}
                />
              </View>
  
              <TouchableOpacity style={styles.addButton} onPress={createPost}>
                <Text style={styles.text}>Add Post</Text>
              </TouchableOpacity>
  
              <ScrollView style={styles.postsViev}>
                {data != null ? (
                  data.findManyPost.map(item => {
                    return (
                      <TouchableOpacity
                        key={item.id}
                        style={styles.post}
                        onPress={() =>
                          selectPost(item.id, item.title, item.text)
                        }>
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
                  onChangeText={setTitleUpdate}
                  value={titleUpdate}
                />
              </View>
  
              <View style={styles.inputText}>
                <TextInput
                  style={styles.text}
                  onChangeText={setTextUpdate}
                  value={textUpdate}
                />
              </View>
  
              <TouchableOpacity style={styles.addButton} onPress={updatePost}>
                <Text style={styles.text}>Update Post</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setPostEdit(false)}>
                <Text style={styles.text}>Cansel</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.addButton} onPress={deletePost}>
                <Text style={styles.text}>Delete post</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    
    main: {
        backgroundColor: "#E1E4E7",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center' 
      },

    addButton: {
      marginTop: 30,
      height: 40,
      width: 200,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#2F88F0",      
      alignSelf: 'center'
    },
  
    viewBox: {
      height: '100%',
      
      borderRadius: 20,
      marginHorizontal: 10,
    },
  
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000000'
    },
  
    inputText: {
      borderColor: '#000000',
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
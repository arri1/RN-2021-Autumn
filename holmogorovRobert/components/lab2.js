import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, TextInput} from "react-native";
import axios from 'axios';

export default Lab2 = () => {
  
  const [posts, setPosts] = useState([]);
  const addTodo = () => {
    return setPosts([
      {
        id: Math.round().toString(36).substring(3),
        title: text
      },
      ...posts
    ])
  }

  useEffect(()=>{
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          setPosts(response.data);
          })
        .catch((error) => {console.error(error);});
  },[]);

  const [text, setText] = useState('');
  const onChangeText = (text) => {
    setText(text);
  }

  return(
    <View>
      <View>
        <Text style={styles.text}>Список задач</Text>   
      </View>
      <View>
        <TextInput style = {styles.textInput} onChangeText={onChangeText} placeholder="Добавить задачу..."/>
        <Text style={styles.textBtn} onPress={addTodo}>Добавить</Text>
      </View>
      <View> 
        <FlatList data={posts} renderItem={({item})=>(
          <Text>{item.title}</Text>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    paddingTop: 50,
    height: 50,
    backgroundColor: 'silver'
  },
  text: { 
    fontSize: 18,
    textAlign: 'center',
  },
  textBtn: { 
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    textAlign: 'center',
  }
});

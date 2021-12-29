import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image} from "react-native";
import axios from 'axios';
import Figma from "../styles/styles.js"
import LinearGradient from 'react-native-linear-gradient';
import uuid from 'react-native-uuid';
export default Lab2 = ({navigation}) => {
  
  const [posts, setPosts] = useState([]);
  const addTodo = () => {
    rand = uuid.v4();
    return setPosts([
      {
        id: rand,
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
    <View style={Figma.container}>
      <LinearGradient colors={['#4A90E0', '#4BFAF1']} style={Figma.backgRect1}/>
      <Text style={Figma.titleText}>Задание 2</Text>
      <TouchableOpacity style={Figma.titleBox} onPress={() => navigation.goBack()}>
          <Image source = {require('../img/left-arrow.png')} style = {Figma.img}/>
      </TouchableOpacity>
      <View style={Figma.backRect2}>
        <Text style={styles.text}>Список задач</Text>   
        <TextInput style = {styles.textInput} onChangeText={onChangeText} placeholder="Добавить задачу..."/>
        <Text style={styles.textBtn} onPress={addTodo}>Добавить</Text>   
        <FlatList keyExtractor={(item)=>item.id} data={posts} renderItem={({item})=>(<Text>{item.title}</Text>)} style={{marginBottom:20}}/>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  text: { 
    fontSize: 18,
    textAlign: 'center',
  },
  textBtn: { 
    padding:10,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 35,
    textAlign: 'center',
    marginBottom:10
  }
});

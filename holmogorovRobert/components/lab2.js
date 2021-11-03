import React, {useState, useEffect, useReducer} from "react";
import { StyleSheet, Text, Alert, View, FlatList, TextInput} from "react-native";

export default function App() {

  const reducer = (state, action) => {
    switch(action.type) {
      case "add":
        return[
          ...state,
          {
            text: action.payload, 
            key: Math.round().toString(36).substring(3), 
            completed: false
          }
        ]
      default: return state
    }
  }
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');
  const onChangeText = (text) => {
    setText(text);
  }

  useEffect(()=>{
    if (text)
    {
      Alert.alert("Задача добавлена")
    }
   
  },[state]);

  return(
    <View>
      <View>
        <Text style={styles.text}>Список задач</Text>   
      </View>
      <View>
        <TextInput style = {styles.textInput} onChangeText={onChangeText} placeholder="Добавить задачу..."/>
        <Text style={styles.textBtn} onPress={() => dispatch({type: 'add', payload: text})}>Добавить</Text>
      </View>
      <View> 
        <FlatList data={state} renderItem={({item})=>(
          <Text>{item.text}</Text>
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

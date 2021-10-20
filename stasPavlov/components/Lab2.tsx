import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {todoApi} from '../api/api';
import {v4} from 'uuid';

interface Todo {
  text: string
  isChecked: boolean
  id: string
}

const Lab2: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      let todos = await todoApi.getData();
        // @ts-ignore
      setTodos(todos);
      };
    fetchData().then(() => setIsFetching(false));

  }, []);

  if (isFetching) {return <></>;}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '5%',
      alignItems: 'center',
    },
    todoText: {
      textAlign: 'left',
    },
    heading: {
      fontSize: 30,
    },
    deleteButton: {
      marginLeft: 5,
      padding: 2,
      backgroundColor: '#AAA',
    },
    todo: {
      flexDirection: 'row',
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>TodoList</Text>
      <View style={{width: '100%'}}>
        {todos && todos.map((todo : any, idx : number) => {
          return (
            <View key={v4()} style={styles.todo}>
              <Text style={styles.todoText}>{idx + 1}. {todo.text}</Text>
              <TouchableOpacity style={styles.deleteButton}>
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Lab2;

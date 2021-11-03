import React, {useEffect, useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {todoApi} from '../api/api'
import {v4} from 'uuid'
import { Todo } from '../constants/types'

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
  },
})

const Lab2: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)
  useEffect(() => {
    const fetchData = async () => {
      const data = await todoApi.getData()
      setTodos(data)
      }
    fetchData().then(() => setIsFetching(false))

  }, [])

  if (isFetching) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>TodoList</Text>
      <View style={{width: '100%'}}>
        {todos && todos.map((todo : Todo, idx : number) => {
          return (
            <View key={v4()} style={styles.todo}>
              <Text style={styles.todoText}>{idx + 1}. {todo.text}</Text>
              <TouchableOpacity style={styles.deleteButton}>
                <Text>x</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default Lab2

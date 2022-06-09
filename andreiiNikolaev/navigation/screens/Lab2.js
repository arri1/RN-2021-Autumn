import React, { useState} from 'react';
import { ActivityIndicator, FlatList, Text, StyleSheet, View} from 'react-native';

const Lab2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
//Вместо axios использован fetch. 
//Код написан в соответствии с рекомендованным шаблоном использования fetch(reactnative версии 0.68) от официального сайта React Native https://reactnative.dev/docs/network.
  const ToDoList = async () => {
     try {
      const response = await fetch('https://my-json-server.typicode.com/Andrey1291/tasks/db');
      const json = await response.json();
      setData(json.task);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    ToDoList();
  }, []);
  
  return (    
    <View style={styles.container}>  
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
            )}         
        /> 
        )}     
    </View>   
  );
};
//Немного изменены стили.
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC1A5'
    },    
    item: {
      marginTop: '3%',     
      width: '100%',
      padding: 20,      
      height: 60,
      backgroundColor: '#D75A22',
      borderRadius: 10,
      fontSize: 15     
    },   
  });

  export default Lab2;
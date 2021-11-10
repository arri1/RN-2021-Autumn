import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import AddButton from '../../common/buttons/AddButton';
import CheckButton from '../../common/buttons/CheckButton';

const rnLab2 = () => {
  const [data, setData] = useState([]);

  const formatData = (data) => {
    data.forEach(element => {
      let t = element.title + ''
      if (t.length > 40) {
        element.title = t.slice(0,40)
      }
    })
    return data
  }
  
  const getData = async = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => {
      setData(formatData(json));
    })
    .catch((error) => {
      console.error(error);
      setData(formatData(localData))
    })
  }
  
  let localData = [ // plan b emulator doen't fetch, physical device fetches
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }
  ]

  const addItem = () => {
    console.log('additem called')
  }

  useEffect(() => {
    setData(formatData(localData));
  }, []);

  return (
    <SafeAreaView style = {styles.rnSafeArea}>
      <View style = {styles.rnScrollView}>
        <ScrollView>
          { data.map(
            item => 
            <View style = {styles.rnItem} key = {item.id}>
              <CheckButton/>
              <View style = {styles.rnItemDecor}/>
              <Text style = {styles.rnItemText}>
                c{ item.title }
              </Text> 
            </View>
            ) }
            <View style = {styles.rnBlankItem}>
            </View>
        </ScrollView>
      </View>
      
      <AddButton aStyle={styles.rnAddButton} onPress={addItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnSafeArea: {
    backgroundColor: "#333333",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
  },
  rnItem: {
    backgroundColor: "#5E5E5E",
    height: 46.54,
    width: 369.45,
    marginTop: 11.63,
    marginLeft: 11.63,
    borderRadius: 8.72,
    padding: 5.81,
    display: 'flex',
    flexDirection: 'row'
  },
  rnItemDecor: {
    height: 34.91,
    width: 1.5,
    borderRadius: 0.75,
    marginLeft: 5.81,
    backgroundColor: '#FFFFFF'
  },
  rnItemText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnBlankItem: {
    height: 69.8,
    margin: 11.63,
  },
  rnAddButton: {
    position: 'absolute',
    right: 11.63,
    bottom: 11.63,
  }
});

export default rnLab2;

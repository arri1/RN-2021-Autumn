import React, { useEffect, useState } from "react"
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView
} from "react-native"
import { FlatList } from "react-native-gesture-handler"

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  })

  const getPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setPosts(json)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.view}>
      <FlatList
        data={posts}
        renderItem={({item}) => <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemBody}>{item.body}</Text>
        </View>}
      />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFF'
  },
  item: {
    borderRadius: 4.0,
    margin: 4.0,
    padding: 12.0,
    backgroundColor: '#FAFAFA'
  },
  itemTitle: {
    fontSize: 14.0
  },
  itemBody: {
    marginTop: 4.0,
    fontSize: 10.0
  }
})

export default Posts
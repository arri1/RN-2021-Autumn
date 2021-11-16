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
  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const newPosts = await response.json();
      setPosts(newPosts)
    } catch (error) {
      console.error(error);
    }
  }

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
    height: '100%',
    backgroundColor: '#0F044C',
    padding: 20
  },
  item: {
    borderRadius: 4,
    marginBottom: 14,
    padding: 20,
    backgroundColor: '#141E61'
  },
  itemTitle: {
    fontSize: 24,
    color: '#EEEEEE'
  },
  itemBody: {
    marginTop: 16,
    fontSize: 14,
    color: '#EEEEEE'
  }
})

export default Posts
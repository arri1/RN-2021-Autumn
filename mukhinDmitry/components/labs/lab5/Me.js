import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useQuery } from "@apollo/client"
import GET_ME from "../../../sql/quieries/RNUser"

const RNUser = () => {
  const [login, setLogin] = useState(useSelector((state) => state.rnSlice.login))
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [group, setGroup] = useState(null)

  const [{data, error, loading}] = useQuery(GET_ME)                                 
    if (error) {
      return (
        <SafeAreaView style={styles.rnMain}>
          <Text>something went wrong</Text>
        </SafeAreaView>
        )
    }
    

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login')
      return false
    }
    return true
  }

  if (loading)
    return (
      <SafeAreaView style={styles.rnMain}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333"/>
      </SafeAreaView>
    )

  const findUserByLogin = () => {
    console.log('dunno')
    if (isDataCorrect())
      updt({
        variables: {
          login
        }
      })
  }

  return (
    <SafeAreaView style={styles.rnMain}>
      <View>
        <TextInput style = {styles.rnInput} onChangeText={text => setLogin(text)} value={login} placeholder='Login'/>
        <View style={styles.rnItem}>
          <Text style = {styles.rnItemText}>id: {data.id}</Text>
        </View>
        <View style={styles.rnItem}>
          <Text style = {styles.rnItemText}>name:{data.name}</Text>
        </View>
        <View style={styles.rnItem}>
          <Text style = {styles.rnItemText}>group:{data.group}</Text>
        </View> 
        <Pressable 
          onPress={() => {findUserByLogin()}}
          style = {styles.rnButton}
        >
          <Text style={styles.rnButtonText}>
            Find user by login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rnButton: {
    marginTop: 54.9,
    marginLeft: 54.9,
    height: 46.54,
    width: 282.54,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E5E5E",
  },
  rnButtonText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
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
  rnItemText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnMain: {
    backgroundColor: "#333333",
    height: "100%",
    justifyContent: 'center',
  }
});

export default RNUser
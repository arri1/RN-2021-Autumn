import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'
import {useMutation} from "@apollo/client"
import {AUTH} from "../../graphQL/mutations"


const Register = () => {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const { setItem } = useAsyncStorage('token')
  const [state, setState] = useState(0)

  const [auth, {loading}] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      await setItem(authUser.token)
      setState(1)
      console.log('Login succeded')
      console.log(authUser)
    },                                  
    onError: ({message}) => {
      console.log(message)
      if (message==='GraphQL error: Incorrect password'){
          console.log('Incorrect password')
          return  null
      }
      console.log('Something went wrong')
    }
  })

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login')
      return false
    }
    if (password === '') {
      console.log('Null password')
      return false
    }
    return true
  }

  if (loading)
    return (
      <SafeAreaView style={styles.Main}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333"/>
      </SafeAreaView>
    )

  const onAuth = () => {
    if (isDataCorrect())
      auth({
        variables: {     
            login,
            password
        }
      })
  }

  if (state) {
    return (
      <SafeAreaView style={styles.Main}>
        <View>
          <Text style={styles.ButtonText}>
            Successful login
          </Text>
        </View>
      </SafeAreaView>
    );
  }
  else {
    return (
      <SafeAreaView style={styles.Main}>
        <View>
          <TextInput style = {styles.Input} onChangeText={text => setLogin(text)} value={login} placeholder='Login'/>
          <TextInput style = {styles.Input} onChangeText={text => setPassword(text)} value={password} placeholder='Password'/>
          <Pressable 
            onPress={() => {onAuth()}}
            style = {styles.Button}
          >
            <Text style={styles.ButtonText}>
              Login
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
    Button: {
      marginTop: 54.9,
      marginLeft: 54.9,
      height: 46.54,
      width: 282.54,
      borderRadius: 8.72,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#5E5E5E",
    },
    ButtonText: {
      lineHeight: 34.91,
      height: 34.91,
      marginLeft: 5.81,
      color: '#FFFFFF',
      fontSize: 16
    },
    Input: {
      height: 46.54,
      width: 369.45,
      borderRadius: 8.72,
      marginTop: 11.63,
      marginLeft: 11.63,
      padding: 5.81,
      paddingLeft: 11.63,
      lineHeight: 34.91,
      backgroundColor: "#5E5E5E",
      color: '#FFFFFF',
      fontSize: 16
    },
    Main: {
      backgroundColor: "#333333",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default Register 
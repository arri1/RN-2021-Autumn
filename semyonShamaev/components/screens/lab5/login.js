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
import {AUTH} from "../../graphQL/mutations"
import {useMutation} from "@apollo/client"
import {useAsyncStorage} from '@react-native-async-storage/async-storage'

const Login = () => {
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const { setItem } = useAsyncStorage('token')
  const [state, setState] = useState(0)

  const [auth, {loading}] = useMutation(AUTH, {
    onCompleted: async ({authUser}) => {
      await setItem(authUser.token)
      setState(1)
      console.log(authUser)
    },                                  
    onError: ({message}) => {
      if (message==='GraphQL error: Incorrect password'){
          return  null
      }
    }
  })

  const isDataCorrect = () => {
    if (login === '') {
      return false
    }
    if (password === '') {
      return false
    }
    return true
  }

  const onAuth = () => {
    if (isDataCorrect())
      auth({
        variables: {     
            login,
            password
        }
      })
  }

  if (loading)
    return (
      <SafeAreaView style={styles.Main}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333"/>
      </SafeAreaView>
    )

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
      <SafeAreaView style={styles.main}>
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
        marginTop: 20,
        height: 40,
        width: 130,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#C4C4C4",      
        alignSelf: 'center'
      },
      ButtonText: {
        lineHeight: 35,
        height: 35,
        marginLeft: 6,
        color: '#000000',
        fontSize: 18
      },
    Input: {
        height: 60,
        width: 250,
        borderRadius: 10,
        marginTop: 20,
        padding: 6,
        paddingLeft: 12,
        lineHeight: 35,
        backgroundColor: "#AEAEAE",
        color: '#FFFFFF',
        fontSize: 18, 
        alignSelf: 'center'
      },
    main: {
        backgroundColor: "#E1E4E7",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',        
    }
  });

export default Login
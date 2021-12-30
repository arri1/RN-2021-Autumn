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


const Login = ({navigation}) => {
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
      navigation.replace('TabNavigation')
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
          <Pressable 
            onPress={() => {
              navigation.replace('Signup')}}
            style = {styles.Button}
          >
            <Text style={styles.ButtonText}>
              SignUp
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }


}

const styles = StyleSheet.create({
    Button: {
        marginTop: 30,
        height: 40,
        width: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#2F88F0",      
        alignSelf: 'center'
      },
      ButtonText: {
        lineHeight: 35,
        height: 35,
        marginLeft: 6,
        color: '#FFFFFF',
        fontSize: 16
      },
    Input: {
        height: 45,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
        padding: 6,
        paddingLeft: 12,
        lineHeight: 35,
        backgroundColor: "#AEAEAE",
        color: '#FFFFFF',
        fontSize: 16, 
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
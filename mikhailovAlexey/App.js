import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

function HomeScreen() {
  const [animation, setAnimation] = React.useState(new Animated.Value(0))
  const boxInterpolation =  animation.interpolate({
    inputRange: [0, 100],
    outputRange:['orange' , 'blue']
  })
  const animatedStyle = {
    backgroundColor: boxInterpolation
  }
  const handleAnimation = () => {
    if (animation.__getValue() == 100)
     {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
      }
      else
      {
      Animated.timing(animation, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false
      }).start()
      }
    }
  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: boxInterpolation }} >
         <View style={styles.buttonRow}>
               <Button style={styles.buttonSize} title="Update" onPress={handleAnimation}/>
         </View>
    </Animated.View>
  );
}

function SettingsScreen() {
    const [persons, setPersons] = useState([])
    const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const per = res.data;
        setPersons(per)
      })
    console.log(doubled)
    }
    const doubled = persons.map(persons => <View style={styles.box, styles.blockSize}><Text>{persons.name}</Text></View>);
  return (
    <View style={styles.container}>
       { doubled }
       <Button style={styles.buttonSize} title="Update" onPress={getData}/>
    </View>

  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444"
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 20
  },
  buttonSize: {
    fontSize: 30,
    marginVertical: 30,
    padding: 30
  },
  blockSize: {
    backgroundColor: 'gray',
    width: 200,
    margin: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
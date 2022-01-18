import React, { Component, useState } from "react";
import Inputs from './inputs'
import AsyncStorageExample from "./Todo";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar, 
  FlatList
} from "react-native";
import TodoList from "./Todo";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

const Screen1 = props => {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View style={styles.scrollPage}>
       <Animated.View 
       style={[styles.screen, transitionAnimation(props.index)]} 
       index={0}>
         <Image source = {{uri:"https://i.etsystatic.com/17857814/r/il/9f5bbd/1602409486/il_1588xN.1602409486_ji1e.jpg"}}
         style = {{ width: 350, height: 250 }}
         />
         <Button
          title = "Бросай!"
          onPress={() => {
            setDiceRolls([...diceRolls, randomDiceRoll()])
           }}
          color = "red"
          />
          {diceRolls.map((diceRoll, index) => (
          <Text style={styles.text} key={index}>
            {diceRoll}
          </Text>
          ))}
       </Animated.View>
    </View>
  );
};

const Screen2 = props => {

  return (
    <View style={styles.scrollPage}>
       <Animated.View 
       style={[styles.screen, transitionAnimation(props.index)]} 
       index={1}>
         <TodoList textValue={'TodoItem'}/>
       </Animated.View>
    </View>
  );
};

const Screen3 = props => {

  return (
    <View style={styles.scrollPage}>
       <Animated.View 
       style={[styles.screen, transitionAnimation(props.index)]} 
       index={1}>
         <Inputs />
       </Animated.View>
    </View>
  );
};

const Screen4 = props => {

  return (
    <View style={styles.scrollPage}>
       <Animated.View 
       style={[styles.screen, transitionAnimation(props.index)]} 
       index={1}>
         <Inputs />
       </Animated.View>
    </View>
  );
};

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

export default class App extends Component {
  render() {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={styles.scrollView}
      >
        <Screen1 index={0} /> 
        <Screen2 index={1} />
        <Screen3 index={2} />
        <Screen4 index={3} />
      </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#008000"
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20
  },
  screen: {
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
});
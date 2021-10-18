import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

var Colour = () => {
  var b = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
      color += b[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Lab1 = () => {
  const [count, setCount] = useState(0);
  const [backColor, setColor] = useState(Colour());

  const onPress = () => {
    setCount(count + 1);
    setColor(Colour());
  }

  return (
    <View style={styles.container}>
    < TouchableHighlight onPress={onPress} style={{backgroundColor: backColor}}  >
        <View style={styles.button }>
          <Text>Нажми меня!</Text>
        </View>
      </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            Счет нажатия кнопки: {count}
          </Text>
          <Text>
            Номер цвета: {backColor}
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 20
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#000000",
    fontSize: 28
  }
});

export default Lab1
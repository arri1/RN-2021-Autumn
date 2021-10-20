import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

let Colour = () => {
  let b = "0123456789ABCDEF";
  let color = "#";
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
    < TouchableHighlight onPress={onPress} style={{backgroundColor: backColor, borderRadius:100}}  >
        <View style={styles.button }>
          <Text style={{fontSize:30}}>Нажми меня!</Text>
        </View>
      </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            Счет нажатия кнопки: {count}
          </Text>
          <Text style={styles.colorContainer}>
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
    justifyContent: 'flex-start',
    padding: 30
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#000000",
    fontSize: 28
  },
  colorContainer: {
    alignItems: 'flex-end',
    fontSize: 30
  }
});

export default Lab1;
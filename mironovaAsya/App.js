import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View style = {styles.container}>
      <Image source = {{uri:"https://i.etsystatic.com/17857814/r/il/9f5bbd/1602409486/il_1588xN.1602409486_ji1e.jpg"}}
      style = {{ width: 400, height: 300 }}
      />
      <Button
        title = "Бросай!"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
         }}
        color = "red"
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style = {styles.italicText} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}
const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 50,
      padding: 20,
      color: '#8587af',
      backgroundColor: "#ffffff"
   },
   italicText: {
      color: '#8587af',
      fontStyle: 'italic',
      fontSize: 30
   }
})
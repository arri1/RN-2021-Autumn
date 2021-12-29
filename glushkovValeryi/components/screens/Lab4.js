import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import StyledButton from "../common/StyledButton";

const Lab4 = () => {
  const dispatch = useDispatch()
  const points = useSelector((state) => state.points)

  const addPoints = (points) => {
    dispatch({type:"ADD_POINTS", newPoints: points})
  }

  const getPoints = (points) => {
    dispatch({type:"GET_POINTS", newPoints: points})
  }

  return (
    <SafeAreaView>
      <View style = {styles.content}>
        <StyledButton
          text = 'Add Points'
          style = {styles.button}
          onPress = {() => addPoints(5)}
        />
        <View style={styles.pointsArea}>
          <Text style={styles.points}>{points}</Text>
        </View>
        <StyledButton
          text = 'Get Points'
          style = {styles.button}
          onPress = {() => getPoints(5)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#B6CCA1',
    color: '#000000',
    width: 360,
    height: 50
  },
  content: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#545454',
    alignItems: 'center'
  },
  pointsArea: {
    marginTop: 20,
    width: 360,
    height: 410,
    borderRadius: 10,
    backgroundColor: '#D7FCD4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  points: {
    fontSize: 200,
  }
});

export default Lab4;
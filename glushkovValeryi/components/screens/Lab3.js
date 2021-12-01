import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Switch } from 'react-native';

import StyledButton from "../common/StyledButton";

const ackermann = (m, n) => {
    if (m === 0) {
        return n+1
    }
    if (n === 0) {
        return ackermann((m - 1), 1);
    }
    if (m !== 0 && n !== 0) {
        return ackermann((m-1), ackermann(m, (n-1)))
    }
}

const Lab3 = () => {
  const [isSwitch, setSwitch] = useState(false);
  const [isPresed, setPressed] = useState(false);

//   drawRect = isPresed
//   const useMemo = isSwitch

  const acckermanNumberMemo = React.useMemo(() => ackermann(3, 9), [3, 9])
  const acckermanNumber = isSwitch ?acckermanNumberMemo : ackermann(3, 9)

  return (
    <SafeAreaView>
      <View style = {styles.content}>
        <Switch style ={styles.switch}
            value = {isSwitch}
            onValueChange = {(value) => setSwitch(value)}
        />
        <Text style = {styles.siwtchText}>Use memo</Text>
        <StyledButton
          text = 'Press On Me'
          style = {styles.button}
          onPress = {() => setPressed(!isPresed)}
        />
        {!!isPresed && (<View style = {styles.rectangle}>
                            <Text>{acckermanNumber}</Text>
                        </View>)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#D7FCD4',
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
  rectangle: {
    width: '90%',
    height: '50%',
    borderRadius: 10,
    backgroundColor: '#B6CCA1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  switch: {
    marginTop: 10,
  },
});

export default Lab3;
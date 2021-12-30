import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

let countSumCall = 0;
let countSumMemoCall = 0;
let countCallbackCall = 0;
let func = 0;

const Lab3 = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [count, setCount] = useState(0);

  const sum = n => {
    return n + n;
  };

  const sumCallback = useCallback(
    (n, b) => {
      countCallbackCall += 1;
      return n + n;
    },
    [isGreen],
  );

  const sumCount = () => {
    countSumCall += 1;
    return sum(count);
  };

  const sumCountMemo = useMemo(() => {
    countSumMemoCall += 1;
    return sum(count);
  }, [count]);

  const tableRow = (rowName, num, numCall) => {
    return (
      <View style={styles.rowCont}>
        <View style={styles.numCont}>
          <Text style={styles.tableText}>{rowName}</Text>
        </View>
        <View style={styles.numCont}>
          <Text style={styles.tableText}>{num}</Text>
        </View>
        <View style={styles.numCont}>
          <Text style={styles.tableText}>{numCall}</Text>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <View
            style={{
              padding: 20,
            }}>
            {tableRow('Name:', 'Values', 'Calls')}
            {tableRow('Count:', count, count)}
            {tableRow('Sum:', sumCount(), countSumCall)}
            {tableRow('Sum (Memo):', sumCountMemo, countSumMemoCall)}
            {tableRow(
              'Sum (Callback):',
              sumCallback(count, isGreen),
              countCallbackCall,
            )}
          </View>

          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCount(count + 1)}>
            <Text>Add count</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => (func = sumCallback)}>
            <Text>func = sumCallback</Text>
          </TouchableOpacity>

          <View
            style={[
              styles.counterButton,
              {
                borderColor: 'black',
                borderWidth: 1,
                backgroundColor: '#F9A470',
              },
            ]}>
            <Text style={styles.tableText}>
              {func == sumCallback
                ? 'func == sumCallback : True'
                : 'func == sumCallback : False'}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.box,
              {backgroundColor: isGreen ? '#A8C75A' : '#F9A470'},
            ]}
            onPress={() => setIsGreen(!isGreen)}>
            <Text style={{fontSize: 50}}>{isGreen ? 'T' : 'F'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },

  rowCont: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },

  tableText: {fontSize: 16},

  numCont: {
    backgroundColor: '#F9A470',
    width: 120,
    height: 35,
    margin: 1,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counterButton: {
    backgroundColor: '#A8C75A',
    margin: 10,
    borderRadius: 15,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    height: 100,
    width: 100,
    margin: 15,
    borderRadius: 100,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Lab3;

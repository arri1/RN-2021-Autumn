import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import AddButton from '../../common/buttons/AddButton';
import CheckButton from '../../common/buttons/CheckButton';

const rnLab2 = () => {
  const [data, setData] = useState([]);

  const formatData = (data) => {
    data.forEach(element => {
      let t = element.title + ''
      if (t.length > 40) {
        element.title = t.slice(0,40)
      }
    })
    return data
  }

  const getData = async = () => {
    console.log('getData is called')
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((json) => {
      setData(formatData(json));
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const addItem = () => {
    console.log('additem called')
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <SafeAreaView style = {styles.rnSafeArea}>
      <View style = {styles.rnScrollView}>
        <ScrollView>
          { data.map(
            item => 
            <View style = {styles.rnItem} key = {item.id}>
              <CheckButton/>
              <View style = {styles.rnItemDecor}/>
              <Text style = {styles.rnItemText}>
                c{ item.title }
              </Text> 
            </View>
            ) }
            <View style = {styles.rnBlankItem}>
            </View>
        </ScrollView>
      </View>
      
      <AddButton aStyle={styles.rnAddButton} onPress={addItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rnSafeArea: {
    backgroundColor: "#333333",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
  },
  rnItem: {
    backgroundColor: "#5E5E5E",
    height: 46.54,
    width: 369.45,
    marginTop: 11.63,
    marginLeft: 11.63,
    borderRadius: 8.72,
    padding: 5.81,
    display: 'flex',
    flexDirection: 'row'
  },
  rnItemDecor: {
    height: 34.91,
    width: 1.5,
    borderRadius: 0.75,
    marginLeft: 5.81,
    backgroundColor: '#FFFFFF'
  },
  rnItemText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  rnBlankItem: {
    height: 116.36,
  },
  rnAddButton: {
    position: 'absolute',
    right: 23.27,
    bottom: 23.27,
  }
});

export default rnLab2;

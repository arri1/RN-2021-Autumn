import React from 'react'
import { useSelector } from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const rnLab5 = () => {
  return (
    <SafeAreaView style={styles.rnSafeArea}>
        
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

export default rnLab5
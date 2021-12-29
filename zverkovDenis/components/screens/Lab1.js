import React, {useState} from 'react';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const Lab1 = () => {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <View style={styles.shadowsDiv}>
            <Shadow
              distance={2}
              startColor={'#00000040'}
              finalColor={'#00000000'}
              offset={[3, 3]}>
              <TouchableOpacity
                style={[
                  styles.colorBox,
                  {backgroundColor: color},
                  styles.elevation,
                ]}
                onPress={() => setColor('#FFFFFF')}></TouchableOpacity>
            </Shadow>
          </View>

          <View style={styles.shadowsDiv}>
            <Shadow
              distance={2}
              startColor={'#00000040'}
              finalColor={'#00000000'}
              offset={[3, 3]}>
              <LinearGradient
                colors={['#77A827', '#A8C75A', '#FEFFB5', '#A8C75A', '#77A827']}
                style={styles.linearGradient}>
                <View style={styles.colorCodeBox}>
                  <Text style={[styles.mainText, {textTransform: 'uppercase'}]}>
                    {color}
                  </Text>
                </View>
              </LinearGradient>
            </Shadow>
          </View>

          <View style={styles.shadowsDiv}>
            <Shadow
              distance={2}
              startColor={'#00000040'}
              finalColor={'#00000000'}
              offset={[3, 3]}>
              <LinearGradient
                colors={['#F55A38', '#F9A470', '#FEFFB5', '#F9A470', '#F55A38']}
                style={styles.linearGradient}>
                <TouchableOpacity
                  style={styles.colorizeButton}
                  onPress={() =>
                    setColor(
                      '#' + Math.floor(Math.random() * 16581375).toString(16),
                    )
                  }>
                  <Text style={styles.mainText}>Generate color</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Shadow>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

StyleSheet.hairlineWidth = 2;
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },

  colorBox: {
    height: 300,
    width: 360,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },

  colorCodeBox: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  linearGradient: {
    borderRadius: 10,
    borderColor: '#A8452F',
    borderWidth: StyleSheet.hairlineWidth,
  },

  shadowsDiv: {
    marginTop: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },

  colorizeButton: {
    width: '100%',
    paddingHorizontal: 120,
    height: 80,
    justifyContent: 'center',
  },

  mainText: {
    fontSize: 20,
  },
});

export default Lab1;

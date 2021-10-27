import React, {useState, useEffect} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const GradientText = ({children, colorsOfGradient}) => {
  return (
    <LinearTextGradient
      locations={[0, 1]}
      colors={colorsOfGradient}
      start={{x: 0.5, y: 0.0}}
      end={{x: 0.5, y: 1.0}}>
      {children}
    </LinearTextGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 40,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 339,
    height: 266,
  },
  boxShadow: {
    shadowOffset: {width: -8, height: -8},
    shadowOpacity: 1,
    shadowRadius: 16,
    borderRadius: 37.5,
    alignItems: 'center',
    backgroundColor: '#353A45',
    width: 334,
    height: 261,
  },
  topContainer: {
    width: '100%',
    height: 608,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#353A45',
  },
  bottomContainer: {
    height: 104,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#353A45',
  },
  scrollBottom: {
    height: 25,
  },
  scrollTop: {
    height: 10,
  },
  title: {
    width: 275,
    height: 69,
    fontSize: 27,
    marginTop: 14,
    fontFamily: 'chakraPetchBold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#E0DB7E',
  },
  pageText: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'chakraPetchBold',
  },
  image: {
    marginTop: 13,
    height: 159,
    width: 159,
    borderRadius: 79.5,
  },
  curPage: {
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 1,
    shadowRadius: 8,
    height: 63,
    width: 63,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31.5,
    backgroundColor: '#353A45',
  },
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    marginTop: 16,
    shadowRadius: 14,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 112,
    height: 63,
  },
  buttonText: {
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

const Lab2 = () => {
  const [randImages, setRandImage] = useState([]);
  const [firstEl, setFirst] = useState(0);
  const [lastEl, setLast] = useState(5);
  const [page, setPage] = useState(0);
  const ref = React.useRef(null);

  useEffect(() => {
    const randImage = async () => {
      const response = await axios('https://picsum.photos/v2/list');
      setRandImage(response.data.slice(0, 100));
    };
    randImage();
  }, []);

  const pageControl = () => {
    return (
      <View style={styles.bottomContainer}>
        {!!page && (
          <TouchableOpacity
            onPress={() => {
              setFirst(firstEl - 5);
              setLast(lastEl - 5);
              setPage(page - 1);
              ref.current.scrollTo({x: 0, y: 0, animated: true});
            }}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.buttonShadow}>
              <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                <Text style={styles.buttonText}>PREV</Text>
              </GradientText>
            </Neomorph>
          </TouchableOpacity>
        )}
        <Neomorph
          lightShadowColor="#1E2126"
          darkShadowColor="#576178"
          inner
          style={styles.curPage}>
          <GradientText colorsOfGradient={['#FF008A', '#9E00FF']}>
            <Text style={styles.pageText}>{page + 1}</Text>
          </GradientText>
        </Neomorph>
        {!!(randImages.length / 5 - page - 1) && (
          <TouchableOpacity
            onPress={() => {
              setFirst(firstEl + 5);
              setLast(lastEl + 5);
              setPage(page + 1);
              ref.current.scrollTo({x: 0, y: 0, animated: true});
            }}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.buttonShadow}>
              <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                <Text style={styles.buttonText}>NEXT</Text>
              </GradientText>
            </Neomorph>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const content = () => {
    return (
      <View style={styles.topContainer}>
        <ScrollView ref={ref}>
          <View style={styles.back}>
            <View style={styles.scrollTop} />
            {randImages.slice(firstEl, lastEl).map(item => {
              return (
                <LinearGradient
                  key={item.id}
                  colors={['#FF008A', '#9E00FF']}
                  start={{x: 0.5, y: 0.0}}
                  end={{x: 0.5, y: 1.0}}
                  style={styles.box}>
                  <Neomorph
                    inner
                    lightShadowColor="#1E2126"
                    darkShadowColor="#576178"
                    key={item.id}
                    style={styles.boxShadow}>
                    <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                      <Text style={styles.title}>{item.author}</Text>
                    </GradientText>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.download_url,
                      }}
                    />
                  </Neomorph>
                </LinearGradient>
              );
            })}
            <View style={styles.scrollBottom} />
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {randImages ? content() : <ActivityIndicator color={'red'} />}
      {pageControl()}
    </View>
  );
};

export default Lab2;

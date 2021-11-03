import React, {useState, useEffect, useMemo, useCallback} from 'react';
import axios from 'axios';
import {Neomorph} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';

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
  main: {
    height: 690,
    backgroundColor: '#353A45',
  },
  label: {
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 1,
    margin: 5,
    shadowRadius: 8,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353A45',
    width: 112,
    height: 50,
  },
  image: {
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 4,
    height: 200,
    width: 300,
    borderRadius: 37.5,
    margin: 10,
  },
  image2: {
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
    width: 50,
    margin: 5,
  },
  scroll: {
    width: 10,
    height: 200,
    alignSelf: 'center',
    borderRadius: 37.5,
  },
  box2: {
    margin: 5,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 365,
  },
  boxShadow2: {
    borderRadius: 10,
    shadowOffset: {width: -8, height: -8},
    shadowOpacity: 1,
    shadowRadius: 16,
    backgroundColor: '#353A45',
    height: 60,
    width: 360,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    margin: 5,
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
    color: '#FF008A',
  },
  box: {
    borderRadius: 30,
    margin: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    width: 345,
  },
  boxShadow: {
    shadowOffset: {width: -8, height: -8},
    shadowOpacity: 1,
    shadowRadius: 16,
    borderRadius: 27.5,
    backgroundColor: '#353A45',
    height: 245,
    width: 340,
  },
});

const journey = (n, inc = 0) => {
  console.log('' + n + 'started');
  for (let i = 0; i < 600; i++) {}
  console.log('' + n + 'ended');
  return n + inc;
};

const Lab3 = () => {
  const [url, setUrl] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [number, setNumber] = useState(1);
  const [page, setPage] = useState(0);
  const [show1, setShow1] = useState(0);
  const notSoLongJorney = useMemo(() => journey(number), [number]);
  const longJorney = useCallback(inc => journey(number, inc), [number]);
  const [notLongJorney, setJorney] = useState(0);
  const [albumUrl, setAlbumUrl] = useState(
    'https://picsum.photos/v2/list?page=2',
  );
  const [switched, setSwitch] = useState(0);
  const [album, setAlbum] = useState([]);
  const [curUrl, setCurUrl] = useState();
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);

  useEffect(() => {
    setJorney(longJorney(2));
  }, [longJorney]);

  const sliceImages = useMemo(() => {
    return allImages.slice(url, url + 6);
  }, [allImages, url]);

  const miniAlbumm = (allImages1, ref1) => {
    return (
      <LinearGradient
        colors={['#FF008A', '#9E00FF']}
        start={{x: 0.5, y: 0.0}}
        end={{x: 0.5, y: 1.0}}
        style={styles.box2}>
        <Neomorph
          inner
          lightShadowColor="#1E2126"
          darkShadowColor="#576178"
          style={styles.boxShadow2}>
          <ScrollView ref={ref1} horizontal={true}>
            {allImages1.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    ref.current.scrollTo({
                      x: index * 320,
                      y: 0,
                      animated: true,
                    });
                    setCurUrl(item.download_url);
                  }}>
                  <FastImage
                    key={item.id}
                    style={styles.image2}
                    source={{
                      uri: item.download_url,
                      headers: {Authorization: 'token'},
                      cache: FastImage.cacheControl.immutable,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Neomorph>
      </LinearGradient>
    );
  };

  const albumCall = useCallback(
    ref1 => {
      return (
        <LinearGradient
          colors={['#FF008A', '#9E00FF']}
          start={{x: 0.5, y: 0.0}}
          end={{x: 0.5, y: 1.0}}
          style={styles.box}>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.boxShadow}>
            <ScrollView ref={ref1} horizontal={true}>
              <View style={styles.scroll} />
              {allImages.map(item => {
                return (
                  <FastImage
                    key={item.id}
                    style={styles.image}
                    source={{
                      uri: item.download_url,
                      headers: {Authorization: 'token'},
                      cache: FastImage.cacheControl.immutable,
                    }}
                  />
                );
              })}
              <View style={styles.scroll} />
            </ScrollView>
          </Neomorph>
        </LinearGradient>
      );
    },
    [allImages],
  );

  useEffect(() => {
    setAlbum(albumCall(ref));
  }, [albumCall]);

  const minialbum = useMemo(
    () => miniAlbumm(allImages, ref2),
    [allImages, ref2],
  );

  useEffect(() => {
    axios
      .get(albumUrl)
      .then(({data: newData}) => {
        setAllImages(newData);
      })
      .catch(() => {});
  }, [albumUrl]);

  const pageControl = () => {
    return (
      <View style={styles.cont}>
        {!!page && (
          <TouchableOpacity
            onPress={() => {
              setUrl(url - 6);
              setPage(page - 1);
              ref2.current.scrollTo({
                x: (page - 1) * 360,
                y: 0,
                animated: true,
              });
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
        {!!(allImages.length / 6 - page - 1) && (
          <TouchableOpacity
            onPress={() => {
              setUrl(url + 6);
              setPage(page + 1);
              ref2.current.scrollTo({
                x: (page + 1) * 360,
                y: 0,
                animated: true,
              });
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

  const memoUse = () => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => {
              setNumber(number + 1);
            }}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.label}>
              <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                <Text style={styles.buttonText}>ADD</Text>
              </GradientText>
            </Neomorph>
          </TouchableOpacity>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.label}>
            <Text style={styles.buttonText}>{number}</Text>
          </Neomorph>
        </View>
        <View style={styles.cont}>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.label}>
            <Text style={styles.buttonText}>Memo</Text>
          </Neomorph>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.label}>
            <Text style={styles.buttonText}>
              {show1 ? notSoLongJorney : null}
            </Text>
          </Neomorph>
        </View>
        <View style={styles.cont}>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.label}>
            <Text style={styles.buttonText}>callBack</Text>
          </Neomorph>
          <Neomorph
            inner
            lightShadowColor="#1E2126"
            darkShadowColor="#576178"
            style={styles.label}>
            <Text style={styles.buttonText}>
              {show1 ? notLongJorney : null}
            </Text>
          </Neomorph>
        </View>

        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => {
              switched
                ? setAlbumUrl('https://picsum.photos/v2/list?page=2')
                : setAlbumUrl('https://picsum.photos/v2/list?page=1');
              setSwitch(!switched);
            }}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.buttonShadow}>
              <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                <Text style={styles.buttonText}>SWITCH</Text>
              </GradientText>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShow1(!show1);
            }}>
            <Neomorph
              lightShadowColor="#1E2126"
              darkShadowColor="#576178"
              style={styles.buttonShadow}>
              <GradientText colorsOfGradient={['#FAFF00', '#DF791A']}>
                <Text style={styles.buttonText}>SHOW</Text>
              </GradientText>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View>
        {memoUse()}
        {album}
        {minialbum}
        {pageControl()}
      </View>
    </View>
  );
};

export default Lab3;

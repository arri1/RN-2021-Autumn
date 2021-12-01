import React, {useState} from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {favItem} from '../../store/album';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#353A45',
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
    justifyContent: 'center',
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
  },
  bottomContainer: {
    height: 104,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scrollBottom: {
    height: 25,
  },
  scrollTop: {
    height: 10,
  },
  title: {
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FDD400',
    height: 69,
    fontSize: 25,
    fontFamily: 'chakraPetchBold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pageText: {
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FF008A',
    fontSize: 36,
    fontFamily: 'chakraPetchBold',
    textAlign: 'center',
  },
  image: {
    marginTop: 13,
    height: 159,
    width: 159,
    borderRadius: 79.5,
    borderWidth: 4,
    borderColor: 'white',
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
    width: '100%',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: 2, height: 2},
    color: '#FDD400',
    fontFamily: 'chakraPetchBold',
    fontSize: 18,
    textAlign: 'center',
  },
});

const Lab2 = () => {
  const [firstEl, setFirst] = useState(0);
  const [lastEl, setLast] = useState(5);
  const [page, setPage] = useState(0);
  const ref = React.useRef(null);

  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();

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
              <Text style={styles.buttonText}>PREV</Text>
            </Neomorph>
          </TouchableOpacity>
        )}
        <Neomorph
          lightShadowColor="#1E2126"
          darkShadowColor="#576178"
          inner
          style={styles.curPage}>
          <Text style={styles.pageText}>{page + 1}</Text>
        </Neomorph>
        {!!(data.length / 5 - page - 1 > 0 ? 1 : 0) && (
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
              <Text style={styles.buttonText}>NEXT</Text>
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
            {data.slice(firstEl, lastEl).map(item => {
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
                    <Text style={styles.title}>
                      {item.author + item.favIcon}
                    </Text>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => {
                        dispatch(favItem(item.id));
                      }}>
                      <Image
                        key={item.id}
                        style={styles.image}
                        source={{
                          uri: item.download_url,
                        }}
                      />
                    </TouchableOpacity>
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
      {data ? content() : <ActivityIndicator color={'red'} />}
      {pageControl()}
    </View>
  );
};

export default Lab2;

import React, {useState, useEffect} from 'react';
import {Shadow} from 'react-native-neomorph-shadows';
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

const MorphOut = ({styleTop, styleBottom, children}) => {
  return (
    <Shadow style={styleTop}>
      <Shadow style={styleBottom}>{children}</Shadow>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  boxTopShadow: {
    shadowOffset: {width: -8, height: -8},
    shadowOpacity: 1,
    shadowColor: '#9F72CC',
    shadowRadius: 8,
    borderRadius: 40,
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#774991', //B85849
    width: 339,
    height: 266,
  },
  boxBottomShadow: {
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 1,
    shadowColor: '#5A4074',
    shadowRadius: 8,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#774991', //B85849
    width: 339,
    height: 266,
  },
  topContainer: {
    width: '100%',
    height: 608,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#D9D9D6',
  },
  bottomContainer: {
    height: 104,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#B5B2B2',
  },
  scrollBottom: {
    height: 25,
    backgroundColor: '#B5B2B2',
  },
  scrollTop: {
    height: 10,
    backgroundColor: 'red',
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
  curPageTop: {
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 1,
    shadowColor: '#7DE79B',
    shadowRadius: 8,
    height: 63,
    width: 63,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31.5,
    backgroundColor: '#5AA870',
  },
  curPageBottom: {
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowColor: '#457D55',
    shadowRadius: 8,
    height: 63,
    width: 63,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 31.5,
    backgroundColor: '#5AA870',
  },
  buttonBottomShadow: {
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowColor: '#1E3A53',
    shadowRadius: 8,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A83A8',
    width: 112,
    height: 63,
  },
  buttonTopShadow: {
    shadowOffset: {width: -7, height: -7},
    shadowOpacity: 1,
    shadowColor: '#9BC6ED',
    marginTop: 16,
    shadowRadius: 14,
    borderRadius: 40,
    backgroundColor: '#5A83A8',
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
            <MorphOut
              styleTop={styles.buttonTopShadow}
              styleBottom={styles.buttonBottomShadow}>
              <Text style={styles.buttonText}>PREV</Text>
            </MorphOut>
          </TouchableOpacity>
        )}
        <MorphOut
          styleTop={styles.curPageTop}
          styleBottom={styles.curPageBottom}>
          <Text style={styles.pageText}>{page + 1}</Text>
        </MorphOut>
        {!!(randImages.length / 5 - page - 1) && (
          <TouchableOpacity
            onPress={() => {
              setFirst(firstEl + 5);
              setLast(lastEl + 5);
              setPage(page + 1);
              ref.current.scrollTo({x: 0, y: 0, animated: true});
            }}>
            <MorphOut
              styleTop={styles.buttonTopShadow}
              styleBottom={styles.buttonBottomShadow}>
              <Text style={styles.buttonText}>NEXT</Text>
            </MorphOut>
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
                <MorphOut
                  key={item.id}
                  styleBottom={styles.boxBottomShadow}
                  styleTop={styles.boxTopShadow}>
                  <Text style={styles.title}>{item.author}</Text>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.download_url,
                    }}
                  />
                </MorphOut>
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

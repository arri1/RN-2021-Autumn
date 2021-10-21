import React, {useState, useEffect} from 'react';
import DropShadow from 'react-native-drop-shadow';
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

const styles = StyleSheet.create({
  newsBox: {
    borderRadius: 25,
    marginTop: 8.5,
    marginBottom: 8.5,
    width: 373,
    height: 295,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EEED',
  },
  boxShadow: {
    shadowColor: 'rgba(163, 71, 60, 0.8)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  backContainer: {
    width: '100%',
    height: 625,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  back: {
    width: '100%',
    backgroundColor: 'white',
  },
  bottomContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  title: {
    width: 349,
    height: 104,
    fontSize: 22,
    fontFamily: 'latoRegular',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#29A364',
  },
  titleShadow: {
    shadowColor: 'rgba(41, 163, 100, 0.6)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  pageText: {
    fontSize: 26,
    color: '#29A364',
    fontFamily: 'latoLight',
  },
  pageTextShadow: {
    shadowColor: 'rgba(144, 240, 190, 0.8)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  image: {
    marginTop: 13,
    height: 159,
    width: 159,
    borderRadius: 79.5,
  },
  curPage: {
    height: 50,
    width: 50,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#F2EEED',
  },
  button: {
    marginTop: 5,
    height: 50,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#90F0BE',
  },
  buttonText: {
    fontFamily: 'latoBlack',
    fontSize: 40,
    textAlign: 'center',
    color: '#A3473C',
  },
  buttonTextShadow: {
    shadowColor: 'rgba(240, 147, 137, 0.8)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  buttonShadow: {
    shadowColor: 'rgba(41, 163, 100, 0.8)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  pageShadow: {
    shadowColor: 'rgba(240, 147, 137, 0.7)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

const Lab2 = () => {
  const [photos, setPhotos] = useState([]);
  const [firstEl, setFirst] = useState(0);
  const [lastEl, setLast] = useState(5);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const axiosPhotos = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setPhotos(response.data.slice(0, 100));
    };
    axiosPhotos();
  }, []);

  const pageControl = () => {
    return (
      <View style={styles.parent}>
        {!!page && (
          <DropShadow style={styles.buttonShadow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setFirst(firstEl - 5);
                setLast(lastEl - 5);
                setPage(page - 1);
              }}>
              <DropShadow style={styles.buttonTextShadow}>
                <Text style={styles.buttonText}>←</Text>
              </DropShadow>
            </TouchableOpacity>
          </DropShadow>
        )}
        <DropShadow style={styles.pageShadow}>
          <View style={styles.curPage}>
            <DropShadow style={styles.pageTextShadow}>
              <Text style={styles.pageText}>{page + 1}</Text>
            </DropShadow>
          </View>
        </DropShadow>
        {!!(photos.length / 5 - page - 1) && (
          <DropShadow style={styles.buttonShadow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setFirst(firstEl + 5);
                setLast(lastEl + 5);
                setPage(page + 1);
              }}>
              <DropShadow style={styles.buttonTextShadow}>
                <Text style={styles.buttonText}>→</Text>
              </DropShadow>
            </TouchableOpacity>
          </DropShadow>
        )}
      </View>
    );
  };

  const content = () => {
    return (
      <View style={styles.backContainer}>
        <ScrollView style={styles.back}>
          {photos.slice(firstEl, lastEl).map(item => {
            return (
              <DropShadow key={item.id} style={styles.boxShadow}>
                <View key={item.id} style={styles.newsBox}>
                  <DropShadow style={styles.titleShadow}>
                    <Text style={styles.title}>{item.title}</Text>
                  </DropShadow>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.thumbnailUrl,
                    }}
                  />
                </View>
              </DropShadow>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.bottomContainer}>
      {photos ? content() : <ActivityIndicator color={'red'} />}
      <View>{pageControl()}</View>
    </View>
  );
};

export default Lab2;

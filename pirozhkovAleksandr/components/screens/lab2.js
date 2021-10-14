import React, {useState, useEffect} from 'react';
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
  item: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D5D9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#969696',
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
  image: {
    marginTop: 10,
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  littleBox: {
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#DBAB84',
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
        {page ? (
          <TouchableOpacity
            style={styles.littleBox}
            onPress={() => {
              setFirst(firstEl - 5);
              setLast(lastEl - 5);
              setPage(page - 1);
            }}>
            <Text style={styles.text}>Previous</Text>
          </TouchableOpacity>
        ) : null}
        <View style={styles.littleBox}>
          <Text style={styles.text}>{page + 1}</Text>
        </View>
        {photos.length / 5 - page - 1 ? (
          <TouchableOpacity
            style={styles.littleBox}
            onPress={() => {
              setFirst(firstEl + 5);
              setLast(lastEl + 5);
              setPage(page + 1);
            }}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const content = () => {
    return (
      <ScrollView>
        {pageControl()}
        {photos.slice(firstEl, lastEl).map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.id}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: item.thumbnailUrl,
                }}
              />
            </View>
          );
        })}
        {pageControl()}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {photos ? content() : <ActivityIndicator color={'red'} />}
    </View>
  );
};

export default Lab2;

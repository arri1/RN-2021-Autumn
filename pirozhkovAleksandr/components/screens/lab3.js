import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {GradientButton, GradientNeomorph} from '../addons/GradientComponents';

import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useDispatch} from 'react-redux';
import {loadPhoto} from '../../store/photo';

const styles = StyleSheet.create({
  main: {
    height: 690,
    backgroundColor: '#353A45',
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

const Lab3 = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [page, setPage] = useState(0);
  const [albumUrl, setAlbumUrl] = useState(
    'https://picsum.photos/v2/list?page=2',
  );
  const [switched, setSwitch] = useState(0);
  const [album, setAlbum] = useState([]);
  const [miniAlbum, setMiniAlbum] = useState([]);
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);

  const albumCall = useCallback(
    ref1 => {
      return (
        <GradientNeomorph styleBox={styles.box} styleShadow={styles.boxShadow}>
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
        </GradientNeomorph>
      );
    },
    [allImages],
  );

  const miniAlbumCall = useCallback(
    ref1 => {
      return (
        <GradientNeomorph
          styleBox={styles.box2}
          styleShadow={styles.boxShadow2}>
          <ScrollView ref={ref1} horizontal={true}>
            {allImages.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    ref.current.scrollTo({
                      x: index * 320,
                      y: 0,
                      animated: true,
                    });
                    dispatch(loadPhoto(item.download_url));
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
        </GradientNeomorph>
      );
    },
    [allImages, dispatch],
  );

  useEffect(() => {
    setAlbum(albumCall(ref));
  }, [albumCall]);

  useEffect(() => {
    setMiniAlbum(miniAlbumCall(ref2));
  }, [miniAlbumCall]);

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
            <GradientButton text="PREV" />
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
            <GradientButton text="NEXT" />
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
              switched
                ? setAlbumUrl('https://picsum.photos/v2/list?page=2')
                : setAlbumUrl('https://picsum.photos/v2/list?page=1');
              setSwitch(!switched);
            }}>
            <GradientButton text="SWITCH" />
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
        {miniAlbum}
        {pageControl()}
      </View>
    </View>
  );
};

export default Lab3;

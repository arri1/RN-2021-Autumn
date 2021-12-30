import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {postFav} from '../../redux/postSlice';
import {useDispatch, useSelector} from 'react-redux';

const Article = ({route}) => {
  const [imgURL, setimgURL] = useState(route.params.imgurl);
  const [favText, setFavText] = useState('Добавить в избранное');

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.value);
  const selectedPost = posts?.filter(item => item.id === route.params.id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {selectedPost?.map(item => {
          return (
            <View key={item.id}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: item.imgurl}} />
              </View>
              <Text style={styles.artBody}>{item.body}</Text>
              <TouchableOpacity
                style={[
                  styles.likeBtn,
                  item.fav
                    ? {backgroundColor: 'green'}
                    : {backgroundColor: null},
                ]}
                onPress={() => {
                  dispatch(postFav(item.id));
                  item.fav
                    ? setFavText('Добавить в избранное')
                    : setFavText('Убрать из избранного');
                }}>
                <AntDesignIcons name="star" size={30} color="gray" />
                <Text>{favText}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 25,
  },
  img: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },
  artBody: {
    color: 'black',
  },
  likeBtn: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  likeBtnText: {
    fontSize: 20,
    fontWeight: '800',
  },
});

export default Article;

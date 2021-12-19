import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const Lab4 = () => {
  const data = useSelector(state => state.posts.value);
  const favsPosts = data?.filter(item => item.checked);

  return (
    <ScrollView>
      <Text>Названния избранных статей</Text>
      {favsPosts?.map(post => {
        return (
          <TouchableOpacity key={post.id}>
            <Text>{post.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Lab4;

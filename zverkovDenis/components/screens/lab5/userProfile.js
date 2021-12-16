import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native';
import TopTabNavigator from '../../routers/TopTabNavigator';

const UserProfile = () => {
  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
      <ScrollView style={{height: '100%'}}>
        <TopTabNavigator />
      </ScrollView>
    </LinearGradient>
  );
};

export default UserProfile;

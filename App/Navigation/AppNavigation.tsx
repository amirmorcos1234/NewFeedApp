import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailsScreen, HomeScreen} from '../Containers';

import {HomeStackParamList} from './AppNavigationTypes';

const HomeStack = createStackNavigator<HomeStackParamList>();

const AppNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default AppNavigation;

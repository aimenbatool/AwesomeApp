import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import PlayerScreen from '../Components/PlayerScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

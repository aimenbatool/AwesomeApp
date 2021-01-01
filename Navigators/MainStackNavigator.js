import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          title: 'Ghadeeri',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

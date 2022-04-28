import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LatestScreen from '../Components/LatestScreen';

const Stack = createStackNavigator();

const LatestStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Category" component={LatestScreen} />
    </Stack.Navigator>
  );
};

export default LatestStackNavigator;

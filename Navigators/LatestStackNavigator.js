import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LatestScreen from '../Components/LatestScreen';

const Stack = createStackNavigator();

const LatestStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={LatestScreen}
        options={{title: 'غدیری', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default LatestStackNavigator;

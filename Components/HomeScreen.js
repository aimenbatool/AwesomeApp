import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoryScreen from './CategoryScreen';
import LatestScreen from './LatestScreen';

const Tab = createMaterialTopTabNavigator();

function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Latest"
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Latest"
        component={LatestScreen}
        options={{tabBarLabel: 'Latest Lectures'}}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{tabBarLabel: 'Category'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigation;

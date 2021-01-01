import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LatestScreen from '../Components/LatestScreen';
import CollectionStackNavigator from './CollectionStackNavigator';
import MiniPlayer from '../Components/MiniPlayer';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(tabsProps) => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName="Latest"
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Latest"
        component={LatestScreen}
        options={{tabBarLabel: 'تازہ'}}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionStackNavigator}
        options={{tabBarLabel: 'مجموعہ'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;

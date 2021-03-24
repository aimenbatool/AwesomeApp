import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LatestStackNavigator from './LatestStackNavigator';
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
        labelStyle: {fontSize: 18},
      }}>
      <Tab.Screen
        name="Latest"
        component={LatestStackNavigator}
        options={{title: 'تازہ'}}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionStackNavigator}
        options={{title: 'مجموعہ'}}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;

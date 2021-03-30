import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LatestStackNavigator from './LatestStackNavigator';
import CollectionStackNavigator from './CollectionStackNavigator';
import MiniPlayer from '../Components/MiniPlayer';
import {View} from 'native-base';
import {StyleSheet, Platform} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(tabsProps) => (
        <View style={styles.tabBar}>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </View>
      )}
      initialRouteName="Latest"
      tabBarOptions={{
        activeTintColor: 'black',
        safeAreaInsets: {
          bottom: 0,
        },
        labelStyle: {
          fontSize: 18,
          fontFamily:
            Platform.OS === 'android'
              ? 'JameelNooriRegular'
              : 'NotoNastaliqUrdu',
        },
        tabStyle: {
          justifyContent: 'center',
        },
        activeBackgroundColor: '#2394C7',
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

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    elevation: 3,
  },
});

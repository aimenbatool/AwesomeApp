import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import PlayerScreen from '../Components/PlayerScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from './DrawerContent';
import About from '../Components/About';
import Contact from '../Components/Contact';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Drawstack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: 'غدیری',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
      <Drawer.Screen name="PlayerScreen" component={PlayerScreen} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Drawstack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import PlayerScreen from '../Components/PlayerScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContents from './DrawerContent';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Drawstack = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: 'غدیری',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F5FAFA',
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Latest');
            }}
            style={styles.headerIcon}>
            <Icon name="home" color={'#505050'} size={28} />
          </TouchableOpacity>
        ),
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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  headerIcon: {
    marginHorizontal: 10,
  },
});

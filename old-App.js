import React from 'react';
import HomeScreen from './Components/HomeScreen';
import {I18nManager} from 'react-native';
import CategoryScreen from './Components/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c9c95',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Ghadeeri',
          }}
        />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
I18nManager.forceRTL(true);

export default App;

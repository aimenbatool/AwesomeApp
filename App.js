import React from 'react';
import HomeTabNavigation from './Components/HomeTabNavigation';
import SubCategoryScreen from './Components/SubCategoryScreen';
import PlaylistScreen from './Components/PlaylistScreen';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Container} from 'native-base';

const Stack = createStackNavigator();

function App() {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeTabNavigation}
            options={{
              title: 'Ghadeeri',
            }}
          />
          <Stack.Screen
            name="SubCategory"
            component={SubCategoryScreen}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="Playlist"
            component={PlaylistScreen}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}
I18nManager.forceRTL(true);

export default App;

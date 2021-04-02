import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../Components/CategoryScreen';
import PlaylistScreen from '../Components/PlaylistScreen';
import AudioScreen from '../Components/AudioScreen';
import SubCategoryScreen from '../Components/SubCategoryScreen';

const Stack = createStackNavigator();

const CollectionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{title: 'مجموعہ'}}
      />
      <Stack.Screen
        name="SubCategory"
        component={SubCategoryScreen}
        options={{title: 'مجموعہ '}}
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="Audio"
        component={AudioScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default CollectionStackNavigator;

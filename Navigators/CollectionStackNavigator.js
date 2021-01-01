import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../Components/CategoryScreen';
import SubCategoryScreen from '../Components/SubCategoryScreen';
import PlaylistScreen from '../Components/PlaylistScreen';

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
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default CollectionStackNavigator;

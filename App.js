import React, {useEffect} from 'react';
import HomeTabNavigation from './Components/HomeTabNavigation';
import SubCategoryScreen from './Components/SubCategoryScreen';
import MiniPlayer from './Components/MiniPlayer';
import PlaylistScreen from './Components/PlaylistScreen';
import {I18nManager, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Container} from 'native-base';
import TrackPlayer from 'react-native-track-player';
import {PlayerContextProvider} from './contexts/PlayerContext';

const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      console.log('player is setup');

      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
        ],
        jumpInterval: 30,
      });
      setIsReady(true);
    });
  }, []);
  return (
    <Container>
      {isReady ? (
        <PlayerContextProvider>
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
            <MiniPlayer />
          </NavigationContainer>
        </PlayerContextProvider>
      ) : (
        <Container>
          <ActivityIndicator />
        </Container>
      )}
    </Container>
  );
};

I18nManager.forceRTL(true);

export default App;

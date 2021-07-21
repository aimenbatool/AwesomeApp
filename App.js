import React, {useEffect} from 'react';
import {I18nManager, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Container, Root} from 'native-base';
import TrackPlayer from 'react-native-track-player';
import {PlayerContextProvider} from './contexts/PlayerContext';
import MainStackNavigator from './Navigators/MainStackNavigator';

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
    <Root>
      <Container>
        {isReady ? (
          <PlayerContextProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </PlayerContextProvider>
        ) : (
          <Container>
            <ActivityIndicator />
          </Container>
        )}
      </Container>
    </Root>
  );
};

I18nManager.forceRTL(true);

export default App;

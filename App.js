import React, {useEffect} from 'react';
import {I18nManager, ActivityIndicator, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Container, Root} from 'native-base';
import TrackPlayer from 'react-native-track-player';
import {PlayerContextProvider} from './contexts/PlayerContext';
import MainStackNavigator from './Navigators/MainStackNavigator';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      try {
        await axios.post('https://api.ghadeeri.pk/register', {
          token,
        });
      } catch (err) {
        console.log('error->', err.response.data);
      }
    } catch (err) {
      console.log('error->', err.response.data);
      return;
    }
  };

  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      console.log('player is setup');
      sendFcmToken();

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

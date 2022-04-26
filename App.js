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

  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //     const unsubscribe =  messaging().onMessage(async remoteMessage =>{
  //        console.log("recieved in foreground " , remoteMessage)
  //        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //      })
  //      return unsubscribe;
  //   }, []);

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  // }, []);

  // const unsubscribe = async ()=>{

  //   messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!');
  //   });

  // }

  const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('token ', token);
      try {
        const res = await axios.post('http://192.168.0.104:5000/register', {
          token,
        });
        console.log('hii', JSON.stringify(res));
      } catch (err) {
        console.log('error->', err.response.data);
      }
    } catch (err) {
      console.log('error->', err.response.data);
      return;
    }
  };

  useEffect(() => {
    sendFcmToken();
    // unsubscribe()
  }, []);

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

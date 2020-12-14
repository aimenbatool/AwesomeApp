import React, {useEffect, useState} from 'react';
import * as nativeBase from 'native-base';
import {View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import tracks from '../utils/trackData';

const LatestScreen = () => {
  //function to initialize the Track Player
  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(tracks);
    return true;
  };

  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  return (
    <nativeBase.Container>
      <nativeBase.Content>
        <nativeBase.List>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text>
                {' '}
                شرحِ زیارتِ جامعہ کبیرہ ، درس ۱، حصہ ۲
              </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button
                  transparent
                  onPress={onButtonPressed}
                  disabled={!isTrackPlayerInit}>
                  {isPlaying ? (
                    <nativeBase.Icon name="pause" />
                  ) : (
                    <nativeBase.Icon name="play" />
                  )}
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text> شرحِ نہج البلاغہ ، درس ۲۱ </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="play" />
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text>
                {' '}
                تفسیرِ سورہِ فجر، آیت ۲، درس ۱{' '}
              </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="play" />
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
        </nativeBase.List>
      </nativeBase.Content>
    </nativeBase.Container>
  );
};

export default LatestScreen;

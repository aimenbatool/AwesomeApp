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
          {tracks.map((track) => (
            <nativeBase.ListItem key={track.id}>
              <nativeBase.Left>
                <nativeBase.Text> {track.title} </nativeBase.Text>
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
          ))}
        </nativeBase.List>
      </nativeBase.Content>
    </nativeBase.Container>
  );
};

export default LatestScreen;

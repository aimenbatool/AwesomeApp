import React from 'react';
import * as nativeBase from 'native-base';
import {View} from 'react-native';
import tracksData from '../utils/trackData';
import {usePlayerContext} from '../contexts/PlayerContext';

const LatestScreen = () => {
  const playerContext = usePlayerContext();

  return (
    <nativeBase.Container>
      <nativeBase.Content>
        <nativeBase.List>
          {tracksData.map((track) => (
            <nativeBase.ListItem key={track.id}>
              <nativeBase.Left>
                <nativeBase.Text> {track.title} </nativeBase.Text>
              </nativeBase.Left>
              <nativeBase.Right>
                <View style={{flexDirection: 'row'}}>
                  {playerContext.isPaused || playerContext.isEmpty ? (
                    <nativeBase.Button
                      transparent
                      onPress={() => {
                        playerContext.play({
                          id: track.id,
                          title: track.title,
                          artwork: track.artwork,
                          artist: track.artist,
                          url: track.url,
                        });
                      }}>
                      <nativeBase.Icon name="play" />
                    </nativeBase.Button>
                  ) : (
                    <nativeBase.Button
                      transparent
                      onPress={() => {
                        playerContext.pause();
                      }}>
                      <nativeBase.Icon name="pause" />
                    </nativeBase.Button>
                  )}

                  {playerContext.isStopped && (
                    <nativeBase.Button transparent onPress={() => null}>
                      <nativeBase.Icon name="stop" />
                    </nativeBase.Button>
                  )}
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

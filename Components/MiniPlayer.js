import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Thumbnail, Container, Content, View, Icon} from 'native-base';
import {usePlayerContext} from '../contexts/PlayerContext';
import {useNavigation} from '@react-navigation/native';

const MiniPlayer = () => {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();

  if (playerContext.isEmpty || !playerContext.currentTrack) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen')}>
      <Container style={styles.miniPlayer}>
        <View>
          <Thumbnail source={{uri: playerContext.currentTrack.artwork}} />
        </View>
        <View style={styles.trackDetails}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.trackTitle}>
              {playerContext.currentTrack.title}
            </Text>
            <Text numberOfLines={1} style={styles.category}>
              {playerContext.currentTrack.album}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => playerContext.seekTo(-10)}>
              <Icon
                style={styles.actionButton}
                name="md-play-forward-outline"
                size={1}
              />
            </TouchableOpacity>

            {playerContext.isPaused ? (
              <TouchableOpacity onPress={() => playerContext.play()}>
                <Icon
                  style={styles.actionButton}
                  name="play-circle-outline"
                  size={1}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => playerContext.pause()}>
                <Icon
                  style={styles.actionButton}
                  name="pause-circle-outline"
                  size={1}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => playerContext.seekTo(+10)}>
              <Icon
                style={styles.actionButton}
                name="md-play-back-outline"
                size={1}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 6,
    fontSize: 25,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    marginLeft: 18,
  },
  trackTitle: {
    fontFamily: 'JameelNooriRegular',
    fontSize: 20,
  },
  category: {
    fontSize: 10,
    fontFamily: 'JameelNooriRegular',
  },
  trackDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'red',
    width: '82%',
    justifyContent: 'space-between',
  },
  thumbnail: {
    borderRadius: 6,
  },
  miniPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
    height: 80,
    backgroundColor: '#F5FAFA',
    paddingLeft: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
export default MiniPlayer;

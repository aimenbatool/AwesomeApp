import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Container, Content, View, Icon, Button} from 'native-base';
import {usePlayerContext} from '../contexts/PlayerContext';

const MiniPlayer = () => {
  const playerContext = usePlayerContext();

  if (playerContext.isEmpty || !playerContext.currentTrack) {
    return null;
  }

  // https://facebook.github.io/react-native/docs/assets/favicon.png
  // const uri = playerContext.currentTrack.artwork;
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

  return (
    <Container style={styles.miniPlayer}>
      <Content>
        <View style={styles.trackDetails}>
          <Thumbnail style={styles.thumbnail} square source={{uri: uri}} />
          <Text numberOf Lines={1} style={styles.trackTitle}>
            زیارت جامعہ کبیرہ، درس نمبر۱، حصہ ۲
          </Text>
          {playerContext.isPaused && (
            <Button transparent onPress={() => playerContext.play()}>
              <Icon style={styles.playButton} name="play" size={1} />
            </Button>
          )}

          {playerContext.isPlaying && (
            <Button transparent onPress={() => playerContext.play()}>
              <Icon style={styles.playButton} name="pause" size={1} />
            </Button>
          )}

          {playerContext.isStopped && (
            <Button transparent onPress={() => null}>
              <Icon style={styles.playButton} name="square" size={1} />
            </Button>
          )}
        </View>
      </Content>
    </Container>
  );
};

let styles = StyleSheet.create({
  playButton: {
    color: '#353755',
    fontSize: 28,
  },
  trackTitle: {
    flex: 1,
    color: '#353755',
    fontSize: 20,
    marginLeft: 8,
  },
  trackDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  thumbnail: {
    borderRadius: 6,
  },
  miniPlayer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F5FAFA',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    padding: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
export default MiniPlayer;

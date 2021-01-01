import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Container, Content, View, Icon, Button} from 'native-base';
import {usePlayerContext} from '../contexts/PlayerContext';

const MiniPlayer = () => {
  console.log('MINI');
  const playerContext = usePlayerContext();

  if (playerContext.isEmpty || !playerContext.currentTrack) {
    return null;
  }

  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

  return (
    <Button>
      <Container style={styles.miniPlayer}>
        <Content>
          <View style={styles.trackDetails}>
            <View>
              <Thumbnail style={styles.thumbnail} square source={{uri: uri}} />
            </View>

            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.trackTitle}>
                {playerContext.currentTrack.title}
              </Text>
              <Text numberOfLines={1} style={styles.category}>
                شرحِ زیارتِ جامعہ کبیرہ
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              {playerContext.isPaused ? (
                <Button transparent onPress={() => playerContext.play()}>
                  <Icon style={styles.playButton} name="play" size={1} />
                </Button>
              ) : (
                <Button transparent onPress={() => playerContext.pause()}>
                  <Icon style={styles.playButton} name="pause" size={1} />
                </Button>
              )}

              {playerContext.isStopped && (
                <Button transparent onPress={() => null}>
                  <Icon style={styles.playButton} name="square" size={1} />
                </Button>
              )}

              <Button transparent onPress={() => playerContext.seekTo()}>
                <Icon
                  style={styles.playButton}
                  name="play-skip-back"
                  size={1}
                />
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    </Button>
  );
};

let styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  playButton: {
    color: '#353755',
    fontSize: 28,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '50%',
    marginLeft: 18,
  },
  trackTitle: {
    // flex: 1,
    // color: '#353755',
    fontSize: 20,
  },
  category: {
    fontSize: 10,
  },
  trackDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnail: {
    borderRadius: 6,
  },
  miniPlayer: {
    width: '100%',
    height: 80,
    backgroundColor: '#F5FAFA',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    padding: 4,

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

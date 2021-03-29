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

  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

  return (
    <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen')}>
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
        </Content>
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
    // padding: 6,
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

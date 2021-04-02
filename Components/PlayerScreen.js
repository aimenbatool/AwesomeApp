import React from 'react';
import {usePlayerContext} from '../contexts/PlayerContext';
import ProgressSlider from './ProgressSlider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Image, Text} from 'react-native';
import {
  CardItem,
  Container,
  Content,
  Icon,
  Card,
  Right,
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const PlayerScreen = () => {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();

  const track = playerContext.currentTrack;

  if (!track) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Content>
          <Card>
            <CardItem>
              <TouchableOpacity onPress={navigation.goBack}>
                <Right>
                  <Icon style={styles.navigation} name="chevron-down" />
                </Right>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Image source={{uri: track.artwork}} style={styles.img} />
            </CardItem>
          </Card>
          <Container style={styles.trackDetails}>
            <Text style={styles.trackTitle}>
              {track.album} - {track.title}
            </Text>
            <Text style={styles.artistName}> {track.artist} </Text>
            <View>
              <ProgressSlider />
            </View>
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity onPress={() => playerContext.seekTo(-10)}>
                <Icon
                  style={styles.actionButton}
                  name="md-play-forward-outline"
                />
              </TouchableOpacity>
              {playerContext.isPaused ? (
                <TouchableOpacity onPress={() => playerContext.play()}>
                  <Icon
                    style={styles.actionButton}
                    name="play-circle-outline"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => playerContext.pause()}>
                  <Icon
                    style={styles.actionButton}
                    name="pause-circle-outline"
                  />
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => playerContext.seekTo(+10)}>
                <Icon style={styles.actionButton} name="md-play-back-outline" />
              </TouchableOpacity>
            </View>
          </Container>
        </Content>
      </Container>
    </SafeAreaView>
  );
};

export default PlayerScreen;

let styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    borderRadius: 8,
    height: 400,
    width: null,
    flex: 1,
  },
  trackDetails: {
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 20,
  },
  artistName: {
    fontSize: 16,
    color: 'grey',
  },
  actionButtonsContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  actionButton: {
    padding: 10,
    fontSize: 35,
  },
  navigation: {
    color: '#1E2022',
  },
});

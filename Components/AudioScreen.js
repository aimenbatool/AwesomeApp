/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Left,
  Right,
  List,
  Button,
  ListItem,
  Text,
  Icon,
  Container,
  Content,
  Body,
  Thumbnail,
} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {usePlayerContext} from '../contexts/PlayerContext';
import Globals from '../utils/Globals';
const {API_URL} = Globals;

const AudioScreen = ({route}) => {
  const {playlist} = route.params;
  const [audios, setAudios] = useState([]);
  const playerContext = usePlayerContext();
  const [message, setMessage] = useState();

  const getAudios = async () => {
    try {
      let response = await fetch(`${API_URL}audios/playlist/${playlist._id}`);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAudios()
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setAudios(res);
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <Text>{message}</Text>
        <List>
          {audios &&
            audios.map((audio) => {
              let resourceLink = `${audio.audio}`;
              resourceLink = resourceLink.substring(9);
              let audioUrl = `${API_URL}${resourceLink}`;

              let artResource = `${audio.artwork}`;
              artResource = artResource.substring(9);
              let artwork = `${API_URL}${artResource}`;

              return (
                <ListItem thumbnail key={audio._id}>
                  <Left>
                    <Thumbnail square source={{uri: artwork}} />
                  </Left>
                  <Body>
                    <Text style={styles.TrackDetails}> {audio.titleUr} </Text>
                    <Text note numberOfLines={1} style={styles.TrackDetails}>
                      {playlist.nameUr}
                    </Text>
                  </Body>
                  <Right>
                    <View style={{flexDirection: 'row'}}>
                      {playerContext.isPaused ||
                      playerContext.isEmpty ||
                      (playerContext.currentTrack &&
                        playerContext.currentTrack.id !== audio._id) ? (
                        <Button
                          transparent
                          onPress={() => {
                            playerContext.play({
                              id: audio._id,
                              title: audio.titleUr,
                              artwork: artwork,
                              artist: audio.artist,
                              url: audioUrl,
                              album: playlist.nameUr,
                            });
                          }}>
                          <Icon name="play" />
                        </Button>
                      ) : (
                        <Button
                          transparent
                          onPress={() => {
                            playerContext.pause();
                          }}>
                          <Icon name="pause" />
                        </Button>
                      )}
                      <Button transparent>
                        <Icon name="download" />
                      </Button>
                    </View>
                  </Right>
                </ListItem>
              );
            })}
        </List>
      </Content>
    </Container>
  );
};

export default AudioScreen;

let styles = StyleSheet.create({
  TrackDetails: {
    textAlign: 'left',
  },
});

import React, {useState, useEffect} from 'react';
import {
  Left,
  List,
  Body,
  ListItem,
  Button,
  Icon,
  Container,
  Content,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {usePlayerContext} from '../contexts/PlayerContext';
import Globals from '../utils/Globals';
// import playerIcon from '../assets/images/iconfinder__Soundcloud_798218.png';
const {API_URL} = Globals;

const LatestScreen = () => {
  const playerContext = usePlayerContext();
  const [latestAudios, setLatestsAudio] = useState();
  const [message, setMessage] = useState();
  const [playlists, setPlaylists] = useState();

  // const playerIconUri = Image.resolveAssetSource(playerIcon).uri;

  const getLatestAudios = async () => {
    try {
      let response = await fetch(`${API_URL}latest-audios/`);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const getPlaylists = async () => {
    try {
      let response = await fetch(`${API_URL}playlists/`);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlaylists()
      .then((res) => {
        res.message ? setPlaylists(res.message) : setPlaylists(res);
      })
      .catch((err) => console.log(err));

    getLatestAudios()
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setLatestsAudio(res);
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        {message}
        <List>
          {latestAudios &&
            latestAudios.map((audio) => {
              let resourceLink = `${audio.audio}`;
              resourceLink = resourceLink.substring(9);
              let audioUrl = `${API_URL}${resourceLink}`;

              let artResource = `${audio.artwork}`;
              artResource = artResource.substring(9);
              let artwork = `${API_URL}${artResource}`;

              let data =
                playlists &&
                playlists.find((playlist) => playlist._id === audio.playlistId);

              return (
                <ListItem thumbnail key={audio._id}>
                  <Left>
                    <Thumbnail square source={{uri: artwork}} />
                  </Left>
                  <Body>
                    <Text style={styles.TrackDetails}> {audio.titleUr} </Text>
                    <Text style={styles.TrackDetails} note numberOfLines={1}>
                      {data && data.nameUr}
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
                              album: data.nameUr,
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

export default LatestScreen;

let styles = StyleSheet.create({
  TrackDetails: {
    textAlign: 'left',
    marginLeft: 5,
  },
});

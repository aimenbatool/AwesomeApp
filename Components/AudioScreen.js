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
  Toast,
} from 'native-base';
import {View, StyleSheet, Platform} from 'react-native';
import {usePlayerContext} from '../contexts/PlayerContext';
import Globals from '../utils/Globals';
import RNFetchBlob from 'rn-fetch-blob';

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

  // download audio

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const downloadAudio = (title, audioURL) => {
    const {config, fs} = RNFetchBlob;

    const isIOS = Platform.OS === 'ios';
    const aPath = Platform.select({
      ios: fs.dirs.DocumentDir,
      android: fs.dirs.DownloadDir,
    });

    // get extension
    let ext = getExtention(audioURL);
    let fileExt = '.' + ext[0];
    let path = aPath + '/' + title + fileExt;
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: path,
        appendExt: fileExt,
      },

      android: {
        fileCache: false,
        appendExt: fileExt,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: path,
          description: 'Audios.',
        },
      },
    });

    if (isIOS) {
      // loading true
      Toast.show({
        text: 'Downloading Started.',
      });
      config(configOptions)
        .fetch('GET', audioURL)
        .then(res => {
          Toast.show({
            text: 'Audio Downloaded.',
            duration: 3000,
          });
          // loading false
        });
      return;
    } else {
      Toast.show({
        text: 'Downloading Started.',
      });
      // set state loading
      config(configOptions)
        .fetch('GET', audioURL)
        .progress((received, total) => {
          console.log('progress', received / total);
        })
        .then(res => {
          Toast.show({
            text: 'Audio Downloaded.',
            duration: 3000,
          });
        })
        .catch((errorMessage, statusCode) => {
          console.log('Error', errorMessage);
        });
    }
  };

  useEffect(() => {
    getAudios()
      .then(res => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setAudios(res);
        }
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content style={styles.content}>
        <View style={styles.messageView}>
          <Text> {message} </Text>
        </View>
        <List>
          {audios &&
            audios.map(audio => {
              let resourceLink = `${audio.audio}`;
              resourceLink = resourceLink.substring(9);
              let audioUrl = `${API_URL}${resourceLink}`;
              let encodedUrl = encodeURI(audioUrl);

              let artResource = `${audio.artwork}`;
              let artwork = `${API_URL}${artResource}`;

              let audioName = `${playlist && playlist.nameEng} - ${
                audio.titleEng
              }`;

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
                              url: encodedUrl,
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
                      <Button
                        onPress={() => downloadAudio(audioName, encodedUrl)}
                        transparent>
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
    fontFamily: 'JameelNooriRegular',
  },
  messageView: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
  },
  content: {
    marginBottom: 40,
  },
});

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
  Toast,
} from 'native-base';
import {View, StyleSheet, Platform} from 'react-native';
import {usePlayerContext} from '../contexts/PlayerContext';
import Globals from '../utils/Globals';
const {API_URL} = Globals;
import RNFetchBlob from 'rn-fetch-blob';

const LatestScreen = () => {
  const playerContext = usePlayerContext();
  const [latestAudios, setLatestsAudio] = useState();
  const [message, setMessage] = useState();
  const [playlists, setPlaylists] = useState();
  const [downloadProgress, setDownloadProgress] = useState();
  // const playerIconUri = Image.resolveAssetSource(playerIcon).uri;

  const getLatestAudios = async () => {
    try {
      let response = await fetch(`${API_URL}latestAudios/`);
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
          description: 'Audio',
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
        .progress({interval: 0.3}, (received, total) => {
          setDownloadProgress((received / total) * 100);
        })
        .then(res => {
          // console.log('file', res);
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
        .progress({interval: 0.3}, (received, total) => {
          console.log('progress', received / total);
          setDownloadProgress((received / total) * 100);
        })
        .then(res => {
          console.log('fileDownlod', res);
          // RNFetchBlob.android.actionViewIntent(res.path());
        })
        .catch((errorMessage, statusCode) => {
          console.log('Error', errorMessage);
        });
    }
  };

  useEffect(() => {
    getPlaylists()
      .then(res => {
        res.message ? setPlaylists(res.message) : setPlaylists(res);
      })
      .catch(err => console.log(err));

    getLatestAudios()
      .then(res => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setLatestsAudio(res);
        }
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // download audio code

  return (
    <Container>
      <Content>
        {message && (
          <View style={styles.messageView}>
            <Text>{message}</Text>
          </View>
        )}
        <List>
          {latestAudios &&
            latestAudios.map(audio => {
              let resourceLink = `${audio.audio}`;
              resourceLink = resourceLink.substring(9);
              let audioUrl = `${API_URL}${resourceLink}`;
              let encodedUrl = encodeURI(audioUrl);

              let artResource = `${audio.artwork}`;
              let artwork = `${API_URL}${artResource}`;

              let data =
                playlists &&
                playlists.find(playlist => playlist._id === audio.playlistId);

              let audioName = `${data && data.nameEng} - ${audio.titleEng}`;
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
                              url: encodedUrl,
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
                      <Button
                        transparent
                        onPress={() => downloadAudio(audioName, encodedUrl)}>
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
    fontFamily: 'JameelNooriRegular',
  },
  messageView: {
    alignItems: 'center',
    marginTop: 30,
  },
});

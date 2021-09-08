import React, {useEffect, useState} from 'react';
import {
  Left,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Container,
  Content,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import Globals from '../utils/Globals';
const {API_URL} = Globals;

function PlaylistScreen({route, navigation}) {
  const {category} = route.params;
  const [playlists, setPlaylists] = useState();
  const [message, setMessage] = useState();
  const getPlaylists = async () => {
    try {
      let response = await fetch(
        `${API_URL}playlists/category/${category._id}`,
      );
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlaylists()
      .then(res => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setPlaylists(res);
        }
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <View style={styles.messageView}>
          <Text style={styles.message}>{message}</Text>
        </View>
        <List>
          {playlists &&
            playlists.map(playlist => {
              return (
                <ListItem
                  key={playlist._id}
                  onPress={() =>
                    navigation.navigate('Audio', {
                      name: playlist.nameUr,
                      playlist: playlist,
                    })
                  }>
                  <Left>
                    <Text style={styles.playlistItem}> {playlist.nameUr} </Text>
                  </Left>
                  <Right>
                    <Text> ({playlist.items.length}) </Text>
                  </Right>
                </ListItem>
              );
            })}
        </List>
      </Content>
    </Container>
  );
}

export default PlaylistScreen;

let styles = StyleSheet.create({
  messageView: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playlistItem: {
    fontFamily: 'JameelNooriRegular',
  },
  message: {
    textAlign: 'center',
  },
});

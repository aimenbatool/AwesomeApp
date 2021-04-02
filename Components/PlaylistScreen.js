import React, {useEffect, useState} from 'react';
import {
  Left,
  List,
  ListItem,
  Text,
  Body,
  Container,
  Content,
} from 'native-base';
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
      .then((res) => {
        if (res.message) {
          setMessage(res.message);
        } else {
          setPlaylists(res);
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
          {playlists &&
            playlists.map((playlist) => {
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
                    <Text> {playlist.nameUr} </Text>
                  </Left>
                  <Body>
                    <Text> ({playlist.items.length}) </Text>
                  </Body>
                </ListItem>
              );
            })}
        </List>
      </Content>
    </Container>
  );
}

export default PlaylistScreen;

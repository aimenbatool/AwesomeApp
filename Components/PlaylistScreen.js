/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
} from 'native-base';
import {View} from 'react-native';

const PlaylistScreen = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text> شرحِ زیارتِ جامعہ کبیرہ ، درس ۱</Text>
            </Left>
            <Right>
              <View style={{flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name="play" />
                </Button>
                <Button transparent>
                  <Icon name="download" />
                </Button>
              </View>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text> شرحِ زیارتِ جامعہ کبیرہ ، درس ۱، حصہ ۲ </Text>
            </Left>
            <Right>
              <View style={{flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name="play" />
                </Button>
                <Button transparent>
                  <Icon name="download" />
                </Button>
              </View>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text> شرحِ زیارتِ جامعہ کبیرہ ، درس ۳ </Text>
            </Left>
            <Right>
              <View style={{flexDirection: 'row'}}>
                <Button transparent>
                  <Icon name="play" />
                </Button>
                <Button transparent>
                  <Icon name="download" />
                </Button>
              </View>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default PlaylistScreen;

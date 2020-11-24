import React from 'react';
import {
  Left,
  List,
  ListItem,
  Text,
  Body,
  Container,
  Content,
} from 'native-base';

function SubCategoryScreen({navigation}) {
  return (
    <Container>
      <Content>
        <List>
          <ListItem
            onPress={() =>
              navigation.navigate('Playlist', {
                name: 'زیارتِ جامعہ کبیرہ',
              })
            }>
            <Left>
              <Text> زیارتِ جامعہ کبیرہ </Text>
            </Left>
            <Body>
              <Text> (9) </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text> زیارتِ آلِ یاسین </Text>
            </Left>
            <Body>
              <Text> (8) </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text> زیارتِ عاشورہ </Text>
            </Left>
            <Body>
              <Text> (2) </Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default SubCategoryScreen;

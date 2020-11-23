import React, {Component} from 'react';
import {I18nManager} from 'react-native';
import {
  Button,
  Icon,
  Left,
  Container,
  Header,
  Body,
  Title,
  Tab,
  Tabs,
  Right,
} from 'native-base';
import LatestScreen from './Components/LatestScreen';
import CategoryScreen from './Components/CategoryScreen';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>غدیری</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading="تازہ">
            <LatestScreen />
          </Tab>
          <Tab heading="مجموعہ">
            <CategoryScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
I18nManager.forceRTL(true);

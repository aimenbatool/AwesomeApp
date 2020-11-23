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
import SubCategoryScreen from './Components/SubCategoryScreen';

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
          <Right />
        </Header>
        <Tabs>
          <Tab heading="ا">
            <SubCategoryScreen />
          </Tab>
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

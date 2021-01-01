import React from 'react';
import {
  Left,
  List,
  ListItem,
  Text,
  Body,
  Icon,
  Container,
  Content,
} from 'native-base';

function CategoryScreen({navigation}) {
  return (
    <Container>
      <Content>
        <List>
          <ListItem
            onPress={() =>
              navigation.navigate('SubCategory', {name: 'شرحِ زیارات'})
            }>
            <Left>
              <Text>aaa شرحِ زیارات </Text>
            </Left>
            <Body>
              <Icon name="chevron-back-outline" />
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text> شرحِ نہج البلاغہ </Text>
            </Left>
            <Body>
              <Icon name="chevron-back-outline" />
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text> تفسیرِ قرآن </Text>
            </Left>
            <Body>
              <Icon name="chevron-back-outline" />
            </Body>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default CategoryScreen;

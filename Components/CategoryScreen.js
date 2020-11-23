import React from 'react';
import {Left, List, ListItem, Text, Body, Icon} from 'native-base';

function CategoryScreen() {
  return (
    <List>
      <ListItem>
        <Left>
          <Text> شرحِ زیارات </Text>
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
  );
}

export default CategoryScreen;

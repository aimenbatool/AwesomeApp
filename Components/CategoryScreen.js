import React from 'react';
import {Left, List, ListItem, Text, Body} from 'native-base';

function CategoryScreen() {
  return (
    <List>
      <ListItem>
        <Left>
          <Text> شرحِ زیارات </Text>
        </Left>
        <Body>
          <Text>(2)</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text> شرحِ نہج البلاغہ </Text>
        </Left>
        <Body>
          <Text>(5)</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text> تفسیرِ قرآن </Text>
        </Left>
        <Body>
          <Text>(3)</Text>
        </Body>
      </ListItem>
    </List>
  );
}

export default CategoryScreen;

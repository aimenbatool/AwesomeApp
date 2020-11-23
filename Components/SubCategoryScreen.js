import React from 'react';
import {Left, List, ListItem, Text, Body} from 'native-base';

function SubCategoryScreen() {
  return (
    <List>
      <ListItem>
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
  );
}

export default SubCategoryScreen;

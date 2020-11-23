import React from 'react';
import {Container, Header, Content, List, ListItem, Text} from 'native-base';

function LatestScreen() {
  return (
    <List>
      <ListItem>
        <Text>Simon Mignolet</Text>
      </ListItem>
      <ListItem>
        <Text>Nathaniel Clyne</Text>
      </ListItem>
      <ListItem>
        <Text>Dejan Lovren</Text>
      </ListItem>
    </List>
  );
}

export default LatestScreen;

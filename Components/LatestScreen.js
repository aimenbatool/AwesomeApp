import React from 'react';
import {Left, Right, List, Button, ListItem, Text, Icon} from 'native-base';
import {View} from 'react-native';

function LatestScreen() {
  return (
    <List>
      <ListItem>
        <Left>
          <Text> شرحِ زیارتِ جامعہ کبیرہ ، درس ۱، حصہ ۲</Text>
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
          <Text> شرحِ نہج البلاغہ ، درس ۲۱ </Text>
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
          <Text> تفسیرِ سورہِ فجر، آیت ۲، درس ۱ </Text>
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
  );
}

export default LatestScreen;

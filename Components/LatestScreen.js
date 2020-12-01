import React from 'react';
import * as nativeBase from 'native-base';
import {View} from 'react-native';

function LatestScreen() {
  return (
    <nativeBase.Container>
      <nativeBase.Content>
        <nativeBase.List>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text>
                {' '}
                شرحِ زیارتِ جامعہ کبیرہ ، درس ۱، حصہ ۲
              </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="play" />
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text> شرحِ نہج البلاغہ ، درس ۲۱ </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="play" />
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
          <nativeBase.ListItem>
            <nativeBase.Left>
              <nativeBase.Text>
                {' '}
                تفسیرِ سورہِ فجر، آیت ۲، درس ۱{' '}
              </nativeBase.Text>
            </nativeBase.Left>
            <nativeBase.Right>
              <View style={{flexDirection: 'row'}}>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="play" />
                </nativeBase.Button>
                <nativeBase.Button transparent>
                  <nativeBase.Icon name="download" />
                </nativeBase.Button>
              </View>
            </nativeBase.Right>
          </nativeBase.ListItem>
        </nativeBase.List>
      </nativeBase.Content>
    </nativeBase.Container>
  );
}

export default LatestScreen;

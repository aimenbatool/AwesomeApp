import React from 'react';
import {ProgressComponent} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {PlayerContext} from '../contexts/PlayerContext';

const buildTime = totalSeconds => {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${minutesStr}:${secondsStr}`;
  }

  return `${minutesStr}:${secondsStr}`;
};

class ProgressSlider extends ProgressComponent {
  static contextType = PlayerContext;
  currentTime = () => {
    return buildTime(this.state.position);
  };

  totalTime = () => {
    return buildTime(this.state.duration - this.state.position);
  };

  render() {
    return (
      <>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={this.state.duration}
          minimumTrackTintColor="#7AAFDD"
          maximumTrackTintColor="#ECF3F5"
          value={this.state.position}
          onValueChange={value => {
            this.context.goTo(value);
          }}
        />
        <View style={styles.timing}>
          <Text>{this.currentTime()}</Text>
          <Text>{this.totalTime()} - </Text>
        </View>
      </>
    );
  }
}

export default ProgressSlider;

let styles = StyleSheet.create({
  slider: {
    height: 40,
    width: 200,
  },
  timing: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

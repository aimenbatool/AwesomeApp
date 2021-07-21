import React, {useEffect, useState} from 'react';
import RNTrackPlayer from 'react-native-track-player';
import TrackPlayer, {
  STATE_PAUSED,
  STATE_PLAYING,
  STATE_STOPPED,
} from 'react-native-track-player';

export const PlayerContext = React.createContext({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: true,
  currentTrack: null,
  play: () => null,
  pause: () => null,
  seekTo: () => null,
  goTo: () => null,
});

export const PlayerContextProvider = props => {
  const [playerState, setPlayerState] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-state',
      ({state}) => {
        setPlayerState(state);
      },
    );
    return () => {
      listener.remove();
    };
  }, []);

  const play = async track => {
    if (!track) {
      if (currentTrack) {
        await TrackPlayer.play();
      }
      return;
    }

    if (currentTrack && track.id !== currentTrack.id) {
      await TrackPlayer.reset();
    }

    // console.log(JSON.stringify(track));
    await TrackPlayer.add([track]);
    setCurrentTrack(track);
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const seekTo = async (amount = 30) => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position + parseInt(amount, 10));
  };

  const goTo = async amount => {
    await RNTrackPlayer.seekTo(amount);
  };

  const value = {
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isEmpty: playerState === null,
    currentTrack,
    pause,
    play,
    seekTo,
    goTo,
  };
  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => React.useContext(PlayerContext);

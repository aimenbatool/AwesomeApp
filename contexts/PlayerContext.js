import React, {useEffect, useState} from 'react';
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
});

export const PlayerContextProvider = (props) => {
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

  const play = async (track) => {
    if (!track) {
      if (currentTrack) {
        await TrackPlayer.play();
      }
      return;
    }
    console.log(track);

    await TrackPlayer.add([track]);
    setCurrentTrack(track);
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const value = {
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isEmpty: playerState === null,
    currentTrack,
    pause,
    play,
  };
  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => React.useContext(PlayerContext);

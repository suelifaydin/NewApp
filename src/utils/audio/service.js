// src/utils/audio/service.js
import TrackPlayer, { Event } from 'react-native-track-player';

const TrackPlayerService = async () => {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.stop();
  });
};

export default TrackPlayerService;

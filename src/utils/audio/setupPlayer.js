import TrackPlayer from 'react-native-track-player';

export const setupPlayer = async () => {
  try {
    const currentState = await TrackPlayer.getState().catch(() => null);
    if (currentState === null) {
      await TrackPlayer.setupPlayer();
      console.log('Player ilk kez kuruldu.');
    } else {
      console.log('Player zaten kurulmuş.');
    }

    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SEEK_TO,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });

  } catch (error) {
    console.error('Player setup hatası:', error);
    throw error;
  }
};

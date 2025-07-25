import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import TrackPlayer from 'react-native-track-player';
import TrackPlayerService from './src/utils/audio/service';

TrackPlayer.registerPlaybackService(() => TrackPlayerService);

AppRegistry.registerComponent(appName, () => App);

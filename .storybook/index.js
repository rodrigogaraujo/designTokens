// if you use expo remove this line
import { AppRegistry, Platform } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { loadStories } from './storyLoader';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  loadStories()
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-community/async-storage').default,
  onDeviceUI: true,
  resetStorybook: true,
  disableWebsockets: true
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
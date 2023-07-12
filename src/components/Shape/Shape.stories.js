import React from 'react';
import { CenterView } from '../../../.storybook/stories/CenterView'
import { storiesOf } from '@storybook/react-native'
import { Shape } from '.';
import { Text } from 'react-native';

// const textKnob = () => text('name', 'Risa')
storiesOf('components/Shape', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Shape simple', () => (
    <Shape><Text>Shape simple</Text></Shape> 
  ))

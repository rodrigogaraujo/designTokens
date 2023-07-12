import React from 'react';
import { CenterView } from '../../../.storybook/stories/CenterView'
import { storiesOf } from '@storybook/react-native'
import { Label } from '.';


storiesOf('components/Label', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Heading Small', () => (
    <Label text='Heading label' type='HeadingSmall' /> 
  ))
  .add('Subtitle Small', () => (
    <Label text='Subtitle label' type='SubTitleSmall' /> 
  ))
  .add('Paragraph', () => (
    <Label text='Paragraph' type='Paragraph' /> 
  ))

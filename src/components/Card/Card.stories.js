import React from 'react';
import { CenterView } from '../../../.storybook/stories/CenterView'
import { storiesOf } from '@storybook/react-native'
import { Card } from '.';

// const textKnob = () => text('name', 'Risa')
storiesOf('components/Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Card simple', () => (
    <Card 
      title='Card mock'
      subtitle='Subtitle'
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    /> 
  ))

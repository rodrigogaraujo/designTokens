import React from 'react';
import { CenterView } from '../../../.storybook/stories/CenterView'
import { storiesOf } from '@storybook/react-native'
import { Button } from '.';


// const textKnob = () => text('name', 'Risa')
storiesOf('components/Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button simple', () => (
    <Button text='Button label' /> 
  ))

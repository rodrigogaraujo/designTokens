import React from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { Shape } from '../Shape'
import { Label } from '../Label'

import * as variables from '../../style-dictionary-dist/variables'
import { Button } from '../Button'
import { truncateString } from '~/utils'

type CardProps = {
  title: string
  subtitle: string
  text: string
  link?: string
}

export const Card = ({ title, subtitle, text, link }: CardProps) => {
  return (
    <Shape>
      <Label text={truncateString(title, 16)} style={styles.title} type='HeadingSmall' />
      <Label text={truncateString(subtitle, 40)} style={styles.subtitle} type='SubTitleSmall' />
      <Label text={text} style={styles.paragraph} type='Paragraph' />
      <View style={{ flexDirection: 'row' }}>
        <Button
          text='Ver mais'
          action={() => {
            if (link) Linking.openURL(link)
          }}
        />
      </View>
    </Shape>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom: variables.spacingSizeXxxs.number,
  },
  subtitle: {
    marginBottom: variables.spacingSizeXxs.number,
  },
  paragraph: {
    marginBottom: variables.spacingSizeSm.number,
  },
})

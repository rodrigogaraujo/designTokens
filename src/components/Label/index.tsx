import React from 'react'
import { PixelRatio, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'

import * as variables from '../../style-dictionary-dist/variables'
import { lineHeightCalc } from '~/utils'

type LabelProps = {
  text: string
  type: 'HeadingSmall' | 'Paragraph' | 'SubTitleSmall'
  style?: TextStyle | ViewStyle
}

export const Label = ({ text, type, style }: LabelProps) => {
  const returnedStyled = () => {
    switch (type) {
      case 'Paragraph':
        return [styles.paragraph, style]
      case 'SubTitleSmall':
        return [styles.subtitleSmall, style]
      default:
        return [styles.headingSmall, style]
    }
  }

  return <Text style={returnedStyled()}>{text}</Text>
}

const styles = StyleSheet.create({
  headingSmall: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeLg.number,
    lineHeight: lineHeightCalc(
      PixelRatio.getFontScale() * variables.fontSizeLg.number,
      variables.lineHeightDistant
    ),
    fontFamily: variables.fontFamilyBold,
    color: variables.neutralColor5,
  },
  subtitleSmall: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeMd.number,
    lineHeight: lineHeightCalc(
      PixelRatio.getFontScale() * variables.fontSizeMd.number,
      variables.lineHeightMedium
    ),
    fontFamily: variables.fontFamilyMedium,
    color: variables.neutralColor4,
  },
  paragraph: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeXs.number,
    lineHeight: lineHeightCalc(
      PixelRatio.getFontScale() * variables.fontSizeXs.number,
      variables.lineHeightDistant
    ),
    fontFamily: variables.fontFamilyRegular,
    color: variables.neutralColor4,
  },
})

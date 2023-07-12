import React, { useState } from 'react'
import { PixelRatio, StyleSheet, Text, TouchableOpacity } from 'react-native'

import * as variables from '../../style-dictionary-dist/variables'
import { lineHeightCalc } from '~/utils'

type ButtonProps = {
  text: string
  action?: () => void
}

export const Button = ({ text, action }: ButtonProps) => {
  const [pressIn, setPressIn] = useState(false)
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: pressIn ? variables.brandColorPrimary5 : variables.brandColorPrimary3,
        },
      ]}
      onPress={action ? action : undefined}
      onPressIn={() => setPressIn(true)}
      onPressOut={() => setPressIn(false)}
      activeOpacity={1}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeSm.number,
    lineHeight: lineHeightCalc(
      PixelRatio.getFontScale() * variables.fontSizeSm.number,
      variables.lineHeightTight
    ),
    fontFamily: variables.fontFamilyMedium,
    color: variables.neutralColor1,
  },
  button: {
    paddingHorizontal: variables.spacingSquishSizeXsH.number,
    paddingVertical: variables.spacingSquishSizeXsV.number,
    borderRadius: variables.borderSizeNone.number,
  },
})

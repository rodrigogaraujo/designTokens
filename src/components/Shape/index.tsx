import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

import * as variables from '../../style-dictionary-dist/variables'

type ShapeProps = {
  children: ReactNode
}

export const Shape = ({ children }: ShapeProps) => {
  return <View style={styles.shape}>{children}</View>
}

const styles = StyleSheet.create({
  shape: {
    paddingHorizontal: variables.spacingSizeSm.number,
    paddingVertical: variables.spacingSizeSm.number,
    borderRadius: variables.borderSizeNone.number,
    backgroundColor: variables.neutralColor1,
    borderColor: variables.neutralColor2,
    borderWidth: variables.borderSizeThin.number,
  },
})

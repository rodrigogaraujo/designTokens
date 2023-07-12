import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Archivo_300Light,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo'

interface Props {
  children: any
}

export const CenterView = (props: Props) => {
  let [fontsLoaded] = useFonts({
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
  })
  if (!fontsLoaded) return <AppLoading />
  return <View style={styles.main}>{props.children}</View>
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

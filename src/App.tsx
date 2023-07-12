import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { FlatList, PixelRatio, StyleSheet, Text, View } from 'react-native'
import { API_KEY, LOAD_STORYBOOK } from '@env'

import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Archivo_300Light,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo'

import StorybookUI from '../.storybook'
import * as variables from './style-dictionary-dist/variables'
import api from './services/api'
import { Card } from './components/Card'

interface Article {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

function App() {
  let [fontsLoaded] = useFonts({
    Archivo_300Light,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,
  })
  const [articles, setArticles] = useState<Article[]>([])
  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`/top-headlines?sources=google-news-br&apiKey=${API_KEY}`)
      setArticles(data.articles)
    }
    getData()
  }, [])

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Card
            text={item.description || ''}
            title={item.author}
            subtitle={item.title}
            link={item.url}
          />
        )}
        keyExtractor={(item) => item.url}
        contentContainerStyle={{
          width: '100%',
          paddingHorizontal: variables.spacingSizeXxs.number,
        }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.neutralColor2,
    paddingTop: variables.spacingSizeMd.number,
  },
  title: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeMd.number,
    color: variables.brandColorPrimary5,
  },
  p: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeSm.number,
    color: variables.brandColorPrimary3,
  },
})

export default LOAD_STORYBOOK === 'true' ? StorybookUI : App

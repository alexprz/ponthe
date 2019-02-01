import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Gallery from '../components/Gallery.js'
import GalleryEventGrid from '../components/GalleryEventGrid.js'
import { ponthe_color } from '../constants'

const GalleryStack = createStackNavigator({
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      header: null
    }
  },
  GalleryEvent: {
    screen: GalleryEventGrid,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.gallery.slug,
      headerTitleStyle: styles.event_title,
      headerTintColor: ponthe_color
    })
  }
})

const styles = StyleSheet.create({
  event_title: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black'
  }
})

export default GalleryStack

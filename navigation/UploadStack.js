import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import UploadEvent from '../components/UploadEvent.js'
import Gallery from '../components/Gallery.js'

import Upload from '../components/Upload.js'
import GalleryEventGrid from '../components/GalleryEventGrid.js'
import { ponthe_color } from '../constants'

const UploadStack = createStackNavigator({
  GalleryUploadList: {
    screen: Upload,
    navigationOptions: {
      header: null
    }
  },
  UploadGallery: {
    screen: UploadEvent,
    navigationOptions: ({navigation}) => ({
      headerTitle: navigation.state.params.gallery.name,
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

export default UploadStack

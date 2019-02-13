import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Upload from '../components/Upload.js'
import Gallery from '../components/Gallery.js'

import GalleryListForUpload from '../components/GalleryListForUpload.js'
import GalleryEventGrid from '../components/GalleryEventGrid.js'
import { ponthe_color } from '../constants'

const UploadStack = createStackNavigator({
  GalleryList: {
    screen: GalleryListForUpload,
    navigationOptions: {
      header: null
    }
  },
  UploadGallery: {
    screen: Upload,
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

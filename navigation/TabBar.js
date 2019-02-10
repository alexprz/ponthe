import React from 'react'
import { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { raiseAlertUnvailable } from '../constants'

// Custom tab bar component
const TabBarContentComponent = (props) => (
  <View style = {styles.main_container}>
    <TouchableOpacity
      onPress = {() => props.navigation.navigate('Home')}
      activeOpacity = {.5}
      style = {styles.item_container}>
      <FontAwesome name='home' size={tab_icon_size}/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() => props.navigation.navigate('GalleryStack')}
      activeOpacity = {.5}
      style = {styles.item_container}>
      <Ionicons name='md-photos' size={tab_icon_size}/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() => raiseAlertUnvailable}
      activeOpacity = {.5}
      style = {styles.item_container}>
      <FontAwesome name = 'upload' size = {tab_icon_size}/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress = {() =>
        props.navigation.toggleDrawer()}
      activeOpacity = {.5}
      style = {styles.item_container}>
      <Ionicons name = 'md-menu' size={tab_icon_size}/>
    </TouchableOpacity>
  </View>
)

export const tab_icon_size = 30

const styles = StyleSheet.create({
  main_container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#EEEEEE'
  },
  item_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabBarContentComponent

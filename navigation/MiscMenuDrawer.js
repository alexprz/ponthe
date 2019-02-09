import React from 'react'
import { connect } from 'react-redux'
import { createDrawerNavigator, DrawerItems,
   SafeAreaView, DrawerActions} from 'react-navigation'
import { StyleSheet, ScrollView, View, Text,
  TouchableHighlight } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { ponthe_color } from '../constants'
import {AsyncStorage} from 'react-native';

// Give a description?
_eraseToken = async () => {
  await AsyncStorage.removeItem('@Ponthe:token');
};

// Custom drawer component
const DrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style = {styles.main_container}>
      <View style = {styles.profile_container}>
        <View style = {styles.icon_container}>
          <FontAwesome
            name = 'user-circle'
            color = {ponthe_color}
            size = {iconSize}/>
        </View>
        <View style = {styles.profile_text_container}>
          <Text style = {styles.profile_text}>
            {props.userInfo.firstName}
          </Text>
          <Text style = {styles.profile_text}>
            {props.userInfo.lastName}
          </Text>
        </View>
      </View>
      <View style = {styles.drawer_container}>
        <TouchableHighlight
          onPress = {() => props.navigation.navigate('Members')}
          underlayColor = '#DDDDDD'
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Membres
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Equipment')}
          underlayColor = '#DDDDDD'
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Matériel
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Dashboard')}
          underlayColor = '#DDDDDD'
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Tableau de bord
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Settings')}
          underlayColor = '#DDDDDD'
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Paramètres
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            const action = { type: "DELETE_USERINFO", value: null }
            props.dispatch(action)
            _eraseToken()
            props.navigation.navigate('SignIn')
          }}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Déconnexion
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  </ScrollView>
)

const iconSize = 50;

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  profile_container: {
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon_container: {
    flex: 1
  },
  profile_text_container: {
    flex: 1,
    justifyContent: 'center'
  },
  profile_text: {
    color: ponthe_color
  },
  drawer_container: {
    flex: 1,
  },
  drawer_item_button: {
    height: 50,
    justifyContent: 'center'
  },
  drawer_item_text: {
    marginLeft: 20
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(DrawerContentComponent)

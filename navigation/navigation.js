import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator,
  createBottomTabNavigator } from 'react-navigation'
import SignIn from '../components/SignIn'
import Home from '../components/home'
import Gallery from '../components/Gallery'
import MiscMenuDrawerNavigator from '../navigation/MiscMenuDrawer.js'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const HomeTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => {
        return <FontAwesome name='home' size={iconSize}/>
      }
    }
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name='md-photos' size={iconSize}/>
      }
    }
  },
  Upload: {
    screen: Gallery,
    navigationOptions: {
      tabBarIcon: () => {
        return <FontAwesome name='upload' size={iconSize}/>
      }
    }
  },
  MiscMenu: {
    screen: MiscMenuDrawerNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name='md-menu' size={iconSize}/>
      },
      tabBarOnPress: ({navigation}) => {
        navigation.toggleDrawer()
      }
    }
  }
},{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF',
    showLabel: false,
    showIcon: true
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Connexion'
    }
  },
  Home: {
    screen: HomeTabNavigator
  }
})

//const AppContainer = createAppContainer(AppSwitchNavigator)

const iconSize = 25;

//export default AppContainer
export default AppSwitchNavigator

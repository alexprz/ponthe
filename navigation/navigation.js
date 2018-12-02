import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Connexion from '../Components/Connexion'
import Home from '../Components/Home'
import Gallery from '../Components/Gallery'
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
  Miscellaneous: {
    screen: Gallery,
    navigationOptions: {
      tabBarIcon: () => {
        return <Ionicons name='md-menu' size={iconSize}/>
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

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      title: 'Connexion'
    }
  },
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: {
      title: 'Page d\'accueil'
    }
  }
})

const iconSize = 25;

//export default ConnexionStackNavigator
export default HomeTabNavigator

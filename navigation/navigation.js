import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Connexion from '../Components/Connexion'
import Home from '../Components/Home'
import Gallery from '../Components/Gallery'
import Members from '../Components/Members'
import Equipment from '../Components/Equipment'
import Dashboard from '../Components/Dashboard'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const MiscDrawerNavigator = createDrawerNavigator({
  Members: {
    screen: Members
  },
  Equipment: {
    screen: Equipment
  },
  Dashboard: {
    screen: Dashboard
  },
  Logout: {
    screen: Home
  }
})

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
    screen: MiscDrawerNavigator,
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

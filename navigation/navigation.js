import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Connexion from '../components/Connexion'
import Home from '../components/Home'
import Gallery from '../components/Gallery'
import Members from '../components/Members'
import Equipment from '../components/Equipment'
import Dashboard from '../components/Dashboard'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const MiscDrawerNavigator = createDrawerNavigator({
  Members: {
    screen: Members,
    navigationOptions: () => ({
      title: 'Membres'
    })
  },
  Equipment: {
    screen: Equipment,
    navigationOptions: () => ({
      title: 'Matériel'
    })
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      title: 'Tableau de bord'
    })
  },
  Logout: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Déconnexion'
    })
    //onPress
    //this.props.navigation.navigate
  }
},{
  drawerPosition: 'right',
  drawerWidth: 200
  }
)

const AppTabNavigator = createBottomTabNavigator({
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
      title: 'Connexion',
      headerBackTitle: null
    }
  },
  Home: {
    screen: AppTabNavigator
  }
})

const iconSize = 25;

export default ConnexionStackNavigator
//export default AppTabNavigator

import React from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator,
  createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import SignIn from '../components/SignIn'
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

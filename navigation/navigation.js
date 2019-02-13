import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator, createStackNavigator,
  createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import SignIn from '../components/SignIn.js'
import SignUp from '../components/SignUp.js'
import Reset from '../components/ResetPassword.js'
import Home from '../components/home.js'
import Gallery from '../components/Gallery.js'
import Members from '../components/Members.js'
import Equipment from '../components/Equipment.js'
import Dashboard from '../components/Dashboard.js'
import Settings from '../components/Settings.js'
import MyImageViewer from '../components/MyImageViewer.js'
import GalleryStack from '../navigation/GalleryStack.js'
import UploadStack from '../navigation/UploadStack.js'
// import Upload from '../components/Upload.js'
import TabBarContentComponent from '../navigation/TabBar.js'
import DrawerContentComponent from '../navigation/MiscMenuDrawer.js'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { ponthe_color } from '../constants'

// Stack navigator that enables the user to navigate between the views
// in order to sign in, sign up, reset password
const ConnexionNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      headerTitle: 'Nouveau compte',
      headerTitleStyle: styles.header_title,
      headerTintColor: ponthe_color
    })
  },
  Reset: {
    screen: Reset,
    navigationOptions: () => ({
      headerTitle: 'Mot de passe oublié',
      headerTitleStyle: styles.header_title,
      headerTintColor: ponthe_color
    })
  }
})

// Bottom tab navigator that enables the user to navigate between main views
// as well as the drawer navigator for the secondary views
const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  GalleryStack: {
    screen: GalleryStack,
  },
  UploadStack: {
    screen: UploadStack,
  },
  MiscMenu: {
    screen: () => null
  },
  Members: {
    screen: Members
  },
  Equipment: {
    screen: Equipment
  },
  // For further developments with login as admin
  // Dashboard: {
  //   screen: Dashboard
  // },
  Settings: {
    screen: Settings
  },
  SignOut: {
    screen: SignIn
  },
  ImageViewer: {
    screen: MyImageViewer
  }
},{
  tabBarComponent: TabBarContentComponent
})

// Drawer navigator that enables the user to navigate between secondary views
const MiscMenuDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator
  },
  Members: {
    screen: Members
  },
  Equipment: {
    screen: Equipment
  },
  // For further developments with login as admin
  // Dashboard: {
  //   screen: Dashboard
  // },
  Settings: {
    screen: Settings
  },
  SignOut: {
    screen: ConnexionNavigator
  }
},{
  drawerPosition: 'right',
  drawerWidth: 200,
  contentComponent: DrawerContentComponent
})

// Switch navigator to enable the navigation between the connexion side
// and the application itself
const AppSwitchNavigator = createSwitchNavigator({
  ConnexionNavigator: {
    screen: ConnexionNavigator,
  },
  Main: {
    screen: MiscMenuDrawerNavigator
  }
})

const iconSize = 25;

const styles = StyleSheet.create({
  header_title: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  }
})

export default AppSwitchNavigator

import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator, createStackNavigator,
  createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import SignIn from '../components/SignIn.js'
import SignUp from '../components/SignUp.js'
import Home from '../components/home.js'
import Gallery from '../components/Gallery.js'
import Members from '../components/Members.js'
import Equipment from '../components/Equipment.js'
import Dashboard from '../components/Dashboard.js'
import Settings from '../components/Settings.js'
import GalleryStack from '../navigation/GalleryStack.js'
import TabBarContentComponent from '../navigation/TabBar.js'
import DrawerContentComponent from '../navigation/MiscMenuDrawer.js'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { ponthe_color } from '../constants'

// Custom tab bar navigator and drawer navigator

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
  }
})

const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  GalleryStack: {
    screen: GalleryStack,
  },
  Upload: {
    screen: () => null
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
  Dashboard: {
    screen: Dashboard
  },
  Settings: {
    screen: Settings
  },
  SignOut: {
    screen: SignIn
  }
},{
  tabBarComponent: TabBarContentComponent
})

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
  Dashboard: {
    screen: Dashboard
  },
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

const AppSwitchNavigator = createSwitchNavigator({
  ConnexionNavigator: {
    screen: ConnexionNavigator,
  },
  Main: {
    screen: MiscMenuDrawerNavigator
  }
})

// Standard tab navigator qnd drawer navigator

// const HomeTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarIcon: () => {
//         return <FontAwesome name='home' size={iconSize}/>
//       }
//     }
//   },
//   Gallery: {
//     screen: Gallery,
//     navigationOptions: {
//       tabBarIcon: () => {
//         return <Ionicons name='md-photos' size={iconSize}/>
//       }
//     }
//   },
//   Upload: {
//     screen: () => null,
//     navigationOptions: {
//       tabBarIcon: () => {
//         return <FontAwesome name='upload' size={iconSize}/>
//       }
//     }
//   },
//   MiscMenu: {
//     screen: () => null,
//     navigationOptions: {
//       tabBarIcon: () => {
//         return <Ionicons name='md-menu' size={iconSize}/>
//       },
//       tabBarOnPress: ({navigation}) => {
//         navigation.toggleDrawer()
//       }
//     }
//   }
// },{
//   tabBarOptions: {
//     activeBackgroundColor: '#DDDDDD',
//     inactiveBackgroundColor: '#FFFFFF',
//     showLabel: false,
//     showIcon: true
//   }
// })

// const MiscMenuDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeTabNavigator
//   },
//   Members: {
//     screen: Members
//   },
//   Equipment: {
//     screen: Equipment
//   },
//   Dashboard: {
//     screen: Dashboard
//   },
//   Settings: {
//     screen: Settings
//   },
//   SignOut: {
//     screen: SignIn
//   }
// },{
//   drawerPosition: 'right',
//   drawerWidth: 200,
//   contentComponent: DrawerContentComponent
// })

//const AppContainer = createAppContainer(AppSwitchNavigator)

const iconSize = 25;

const styles = StyleSheet.create({
  header_title: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black'
  }
})

//export default AppContainer
export default AppSwitchNavigator

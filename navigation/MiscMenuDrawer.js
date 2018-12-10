import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItems,
   SafeAreaView, DrawerActions} from 'react-navigation'
import SignIn from '../components/SignIn'
import Home from '../components/home'
import Members from '../components/Members'
import Equipment from '../components/Equipment'
import Dashboard from '../components/Dashboard'
import Settings from '../components/Settings'
import { FontAwesome } from '@expo/vector-icons'

const DrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.main_container}>
      <View style={styles.profile_container}>
        <View style={styles.icon_container}>
          <FontAwesome
            name='user-circle'
            color={iconColor}
            size={iconSize}/>
        </View>
        <View style={styles.profile_text_container}>
          <Text style={styles.profile_text}>
            Nom de l'utilisateur
          </Text>
        </View>
      </View>
      <View style={styles.drawer_container}>
        <DrawerItems {...props}
          onItemPress = { ({route, focused}) => {
            if (route.routeName == 'SignOut') {
              props.navigation.navigate('SignIn')
            }
            else {
              props.onItemPress({route, focused})
            }
          } }
        />
      </View>
    </SafeAreaView>
  </ScrollView>
)

const MiscMenuDrawerNavigator = createDrawerNavigator({
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
  Settings: {
    screen: Settings,
    navigationOptions: () => ({
      title: 'Paramètres'
    })
  },
  SignOut: {
    screen: SignIn,
    navigationOptions: () => ({
      title: 'Déconnexion'
    })
  }
},{
  drawerPosition: 'right',
  drawerWidth: 200,
  contentComponent: DrawerContentComponent,
  contentOptions : {
    labelStyle: {fontWeight: 'normal'},
    activeLabelStyle: {color: '#000000'},
    //activeLabelStyle: {color: '#FFC000'},
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF'
  }
})

const iconSize = 50;
//const iconColor = '#CCCCCC'
const iconColor = '#FFCC00'
const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  profile_container: {
    height: 100,
    marginTop: 25,
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
    color: iconColor
  },
  drawer_container: {
    flex: 1
  }
})

export default MiscMenuDrawerNavigator

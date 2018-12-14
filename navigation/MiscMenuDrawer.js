import React from 'react'
import { connect } from 'react-redux'
import { createDrawerNavigator, DrawerItems,
   SafeAreaView, DrawerActions} from 'react-navigation'
import { StyleSheet, ScrollView, View, Text,
  TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { ponthe_color } from '../constants'

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
            {props.userInfo.email}
          </Text>
        </View>
      </View>
      <View style = {styles.drawer_container}>
        <TouchableOpacity
          onPress = {() => props.navigation.navigate('Members')}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Membres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Equipment')}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Matériel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Dashboard')}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Tableau de bord
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Settings')}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Paramètres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const action = { type: "DELETE_USERINFO", value: null }
            props.dispatch(action)
            props.navigation.navigate('SignIn')
          }}
          activeOpacity = {.5}
          style = {styles.drawer_item_button}>
          <Text
            style = {styles.drawer_item_text}>
            Déconnexion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
)

// Keep that for the moment: former drawer

// const DrawerContentComponent = (props) => (
//   <ScrollView>
//     <SafeAreaView style={styles.main_container}>
//       <View style={styles.profile_container}>
//         <View style={styles.icon_container}>
//           <FontAwesome
//             name='user-circle'
//             color={ponthe_color}
//             size={iconSize}/>
//         </View>
//         <View style={styles.profile_text_container}>
//           <Text style={styles.profile_text}>
//             {props.userInfo.email}
//           </Text>
//         </View>
//       </View>
//       <View style={styles.drawer_container}>
//         <DrawerItems {...props}
//           onItemPress = { ({route, focused}) => {
//             if (route.routeName == 'SignOut') {
//               const action = { type: "DELETE_USERINFO", value: null }
//               props.dispatch(action)
//               props.navigation.navigate('SignIn')
//             }
//             else {
//               props.onItemPress({route, focused})
//             }
//           } }
//         />
//       </View>
//     </SafeAreaView>
//   </ScrollView>
// )

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
    marginVertical: 5,
    height: 50,
    backgroundColor: '#EEEEEE',
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

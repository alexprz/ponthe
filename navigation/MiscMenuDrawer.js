import React from 'react'
import { connect } from 'react-redux'
import { createDrawerNavigator, DrawerItems,
   SafeAreaView, DrawerActions} from 'react-navigation'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
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
            {props.userInfo.email}
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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(DrawerContentComponent)

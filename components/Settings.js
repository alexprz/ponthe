import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Settings extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Changer de mot de passe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Settings

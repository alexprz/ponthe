import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Dashboard</Text>
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

export default Dashboard

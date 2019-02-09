import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Reset extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Reset</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default Reset

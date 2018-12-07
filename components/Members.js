import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Members extends React.Component {

  componentWillMount() {
    //this.props.navigation.openDrawer()
    //This works if MiscMenuDrawer is not a custom component
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Membres</Text>
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

export default Members

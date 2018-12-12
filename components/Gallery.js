import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Gallery extends React.Component {

  componentWillMount() {
    //console.log(this.props.navigation)
    //Close Drawer
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Galerie de photos</Text>
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

export default Gallery

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'
import GalleryEventGrid from '../components/GalleryEventGrid.js'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
          Dernières photos ajoutées
        </Text>
        <GalleryEventGrid/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 10,
  },
  text_style: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)

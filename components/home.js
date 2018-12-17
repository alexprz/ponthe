import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button } from 'react-native'
import { loadUser, logout, isLogged } from '../API/connexion.js'

class Home extends React.Component {

  render() {
    console.log(this.props)
    return (
      <View style ={ styles.main_container}>
        <Text>Page d'accueil</Text>
        <Text>{this.props.userInfo.firstName}</Text>
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

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)

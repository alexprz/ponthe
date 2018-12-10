import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { loadUser, logout, isLogged } from '../API/connexion.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logged_as_user: ""
    }
    // loadUser().then((responseJson) => {
    //   console.log(responseJson)
    //   this.setState({logged_as_user: responseJson.logged_in_as})
    // })
  }
  render() {
    return (
      <View style={styles.main_container}>
        <Text>Page d'accueil</Text>
        <Text>Logged as : {this.state.logged_as_user}</Text>
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

export default Home

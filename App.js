import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Connexion from './components/connexion'
import Navigation from './navigation/navigation'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

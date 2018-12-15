import React from 'react';
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import { StyleSheet, Text, View } from 'react-native';
import AppSwitchNavigator from './navigation/navigation'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <AppSwitchNavigator/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default App

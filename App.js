import React from 'react';
import { Provider } from 'react-redux'
import Store from './store/configureStore'
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import AppSwitchNavigator from './navigation/navigation'

class App extends React.Component {

  onLayout(e) {
    const {width, height} = Dimensions.get('window')
    console.log(width, height)
  }

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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  page: {
    flex: 1
  }
})

export default App

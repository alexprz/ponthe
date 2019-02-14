import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getLatestImagesFromAPI } from '../API/loadImages'
import store from '../store/configureStore'
import MyFlatList from './MyFlatList'

class Home extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <MyFlatList
        title = {"Dernières photos ajoutées"}
        getImages = {() => {return getLatestImagesFromAPI(store.getState().userInfo.token, 1, 100)}}
        container_style = {styles.main_container}
      />
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25
  }
})

// const mapStateToProps = (state) => {
//   return {
//     userInfo: state.userInfo
//   }
// }

// export default connect(mapStateToProps)(Home)
export default Home

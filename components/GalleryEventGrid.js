import React from 'react'
import { getImagesFromAPI } from '../API/loadImages'
import store from '../store/configureStore'
import MyFlatList from './MyFlatList'

class GalleryEventGrid extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MyFlatList
        getImages = {() => {return getImagesFromAPI(this.props.navigation.state.params.gallery.slug, store.getState().userInfo.token)}}
      />
    )
  }
}

export default GalleryEventGrid

import React from 'react'
import { StyleSheet, View, Text, FlatList,
  ImageBackground, TouchableOpacity } from 'react-native'
//import event_data from '../helpers/GalleryEventData.js'
import ImageItem from './ImageItem'
import {getImagesFromAPI} from '../API/loadImages'
import store from '../store/configureStore'
import MyImageViewer from './MyImageViewer'

class GalleryEventGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        full_path_list: [],
        full_dim_list: [],
        full_file_list: [],
        partial_file_list: [],
        isLoading: false,
        showImageViewer: false,
        current_index: 0,
        page: 0,
        page_size: 10,
        refreshing: true
    }

    this._loadAllPaths()
    this._loadNextImages()
  }

  _loadAllPaths() {
    getImagesFromAPI(this.props.navigation.state.params.gallery.slug, store.getState().userInfo.token).then(data => {

        var path_list = new Array(data.jsonData.approved_files.length).fill("")
        var dim_list = new Array(data.jsonData.approved_files.length).fill({})
        var full_file_list = new Array(data.jsonData.approved_files.length)

        for (var i = 0; i < data.jsonData.approved_files.length; i++) {

          full_file_list[i] = {
            file_path: data.jsonData.approved_files[i].file_path,
            file_dim: data.jsonData.approved_files[i].full_dimension
          }
          path_list[i] = data.jsonData.approved_files[i].file_path
          dim_list[i] = data.jsonData.approved_files[i].full_dimension
        }

        this.setState({
          full_file_list: full_file_list,
          partial_file_list: full_file_list.slice(0, this.state.page_size),
          full_path_list: path_list,
          full_dim_list: dim_list,
          refreshing: false,
          page: 0,
        })
    })
  }

  _displayFullImage = (item, index) => {
    this.setState({
      'showImageViewer': true,
      'current_index': index
    })
  }

  _loadNextImages () {
    if((this.state.page+1)*this.state.page_size < this.state.full_file_list.length){
      this.setState({
        partial_file_list: this.state.partial_file_list.concat(this.state.full_file_list.slice((this.state.page+1)*this.state.page_size, (this.state.page+2)*this.state.page_size)),
        page: this.state.page+1,
        current_index: -1
      })
    }
  }

  _refresh() {
    this.setState({
      refreshing: true
    })
    this._loadAllPaths()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.partial_file_list}
          keyExtractor={(item) => item.file_path.toString()}
          numColumns={numColumns}
          renderItem={({item, index}) =>
            <TouchableOpacity
              style={styles.touchable_opacity}
              onPress={() => this._displayFullImage(item, index)}>
              <ImageItem
                path={item.file_path}
                style = {styles.image}
              />
            </TouchableOpacity>
          }
          onEndReachedThreshold = {0.3}
          onEndReached = {() => {this._loadNextImages()}}
          onRefresh = {() => {this._refresh()}}
          refreshing = {this.state.refreshing}
        />
        <MyImageViewer
          show={this.state.showImageViewer}
          full_path_list={this.state.full_path_list}
          full_dim_list={this.state.full_dim_list}
          current_index={this.state.current_index}
        />
      </View>
    )
  }
}

const numColumns = 2

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    backgroundColor: 'white'
  },
  image_text_container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable_opacity: {
    flex: 1,
    margin: 2,

  },
  image_text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
    color: 'white'
  },
  image: {
    width: "100%",
    height: 150,
  }
})

export default GalleryEventGrid

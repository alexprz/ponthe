import React from 'react'
import { StyleSheet, View, Text, FlatList,
  ImageBackground, TouchableOpacity } from 'react-native'
import event_data from '../helpers/GalleryEventData.js'
import ImageItem from './ImageItem'
import {getImagesFromAPI} from '../API/loadImages'
import store from '../store/configureStore'
import MyImageViewer from './MyImageViewer'

class GalleryEventGrid extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          file_list: [],
          path_list: [],
          isLoading: false,
          showImageViewer: false,
          current_index: 0
      }
      this._loadImages()
  }

  _loadImages () {
    this.setState({isLoading: true})
    getImagesFromAPI(this.props.navigation.state.params.gallery.slug, store.getState().userInfo.token).then(data => {

        var path_list = new Array(data.jsonData.approved_files.length).fill("")

        for (var i = 0; i < data.jsonData.approved_files.length; i++) {
          path_list[i] = data.jsonData.approved_files[i].file_path
        }

        this.setState({
            file_list: data.jsonData.approved_files,
            path_list: path_list,
            isLoading: false
        })
    })
  }

  _displayFullImage = (item, index) => {
    this.setState({
      'showImageViewer': true,
      'current_index': index
    })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.file_list}
          keyExtractor={(item) => item.file_path.toString()}
          numColumns={numColumns}
          renderItem={({item, index}) =>
            <TouchableOpacity
              onPress={() => this._displayFullImage(item, index)}>
              <ImageItem base64={item.base64} path={item.file_path} />
            </TouchableOpacity>
          }
        />
        <MyImageViewer
          show={this.state.showImageViewer}
          path_list={this.state.path_list}
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
  image_text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
    color: 'white'
  },
  image: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: '#DDDDDD'
  }
})

export default GalleryEventGrid

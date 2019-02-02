import React from 'react'
import { StyleSheet, View, Text, FlatList,
  ImageBackground, TouchableOpacity } from 'react-native'
import event_data from '../helpers/GalleryEventData.js'
import ImageItem from './ImageItem'
import {getImagesFromAPI} from '../API/loadImages'
import store from '../store/configureStore'

class GalleryEventGrid extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          file_list: [],
          isLoading: false
      }
      this._loadImages()
  }

  _loadImages () {
    this.setState({isLoading: true})
    getImagesFromAPI(this.props.navigation.state.params.gallery.slug, store.getState().userInfo.token).then(data => {
        this.setState({
            file_list: data.jsonData.approved_files,
            isLoading: false
        })
    })
  }

  _displayFullImage = (item) => {
    this.props.navigation.navigate('ImageViewer', {image: item})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          data={this.state.file_list}
          keyExtractor={(item) => item.file_path.toString()}
          numColumns={numColumns}
          renderItem={({item}) =>
            <TouchableOpacity
              onPress={() => this._displayFullImage(item)}>
              <ImageItem base64={item.base64} path={item.file_path} />
            </TouchableOpacity>
            // <ImageItem base64={item.base64} path={item.file_path} />
            // <ImageBackground style={styles.image}>
            //   <View style={styles.image_text_container}>
            //     <Text style={styles.image_text}> {item.id} </Text>
            //   </View>
            // </ImageBackground>
          }
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

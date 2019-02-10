import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, FlatList, TouchableOpacity,
  TouchableWithoutFeedback } from 'react-native'
import { SecureStore } from 'expo';
import {getLatestImagesFromAPI, getFullImageFromAPI} from '../API/loadImages'
import ImageItem from './ImageItem'
import store from '../store/configureStore'
import MyImageViewer from './MyImageViewer'

class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          file_list: [],
          path_list: [],
          isLoading: false,
          showImageViewer: false,
          current_index: 0,
          page: 0,
          page_size: 10
      }
      // this._loadImages()
      this._loadNextImages()
  }

  // _loadImages () {
  //   this.setState({isLoading: true})
  //   getLatestImagesFromAPI(store.getState().userInfo.token, 1, 10).then(data => {
  //
  //       var path_list = new Array(data.jsonData.latest_files.length).fill("")
  //
  //       for (var i = 0; i < data.jsonData.latest_files.length; i++) {
  //         path_list[i] = data.jsonData.latest_files[i].file_path
  //       }
  //
  //       this.setState({
  //           file_list: data.jsonData.latest_files,
  //           path_list: path_list,
  //           isLoading: false
  //       })
  //   })
  // }

  _displayFullImage = (item, index) => {
    this.setState({
      'showImageViewer': true,
      'current_index': index
    })
  }

  _loadNextImages () {
    // this.setState({isLoading: true})
    getLatestImagesFromAPI(store.getState().userInfo.token, this.state.page+1, this.state.page_size).then(data => {

        var path_list = new Array(data.jsonData.latest_files.length).fill("")

        for (var i = 0; i < data.jsonData.latest_files.length; i++) {
          path_list[i] = data.jsonData.latest_files[i].file_path
        }

        this.setState({
            file_list: this.state.file_list.concat(data.jsonData.latest_files),
            path_list: this.state.path_list.concat(path_list),
            isLoading: false,
            page: this.state.page+1
        })
    })

  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
          Dernières photos ajoutées
        </Text>
          <FlatList
            data={this.state.file_list}
            keyExtractor={(item) => item.file_path.toString()}
            numColumns={numColumns}
            renderItem={({item, index}) =>
              <TouchableOpacity
                style={styles.touchable_opacity}
                onPress={() => this._displayFullImage(item, index)}>
                <ImageItem
                  base64={item.base64}
                  path={item.file_path}
                  style = {styles.image}
                />
              </TouchableOpacity>
            }
            onEndReachedThreshold = {0.2}
            onEndReached = {() => {
              console.log("onEndReached")
              this._loadNextImages()
            }}
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
    flex: 1,
    marginTop: 25,
  },
  touchable_opacity: {
    flex: 1,
    margin: 2,
  },
  text_style: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  image: {
    width: "100%",
    height: 150,
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)

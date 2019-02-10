import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import {getLatestImagesFromAPI, getFullImageFromAPI} from '../API/loadImages'
import ImageItem from './ImageItem'
import store from '../store/configureStore'
import {SecureStore} from 'expo';
import MyImageViewer from './MyImageViewer'
import {API_URL} from '../constants'

class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          file_list: [],
          // dim_list: [],
          full_path_list: [],
          full_dim_list: [],
          // path_list: [],
          isLoading: false,
          showImageViewer: false,
          current_index: 0,
          page: 0,
          page_size: 10
      }
      // this._loadNextImages = this._loadNextImages.bind(this)
      // this._loadImages()
      this._loadAllPaths(100)
      this._loadNextImages()
  }

  _loadAllPaths(nb_max_path_to_load) {



    getLatestImagesFromAPI(store.getState().userInfo.token, 1, nb_max_path_to_load).then(data => {

        var path_list = new Array(data.jsonData.latest_files.length).fill("")
        var dim_list = new Array(data.jsonData.latest_files.length).fill({})

        for (var i = 0; i < data.jsonData.latest_files.length; i++) {
          path_list[i] = data.jsonData.latest_files[i].file_path
          dim_list[i] = data.jsonData.latest_files[i].full_dimension
        }

        console.log(path_list)
        console.log(dim_list);

        this.setState({
            full_path_list: path_list,
            full_dim_list: dim_list,
        })
    })
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
        var dim_list = new Array(data.jsonData.latest_files.length).fill({})

        for (var i = 0; i < data.jsonData.latest_files.length; i++) {
          path_list[i] = data.jsonData.latest_files[i].file_path
          dim_list[i] = data.jsonData.latest_files[i].full_dimension
        }

        // console.log(dim_list);

        this.setState({
            file_list: this.state.file_list.concat(data.jsonData.latest_files),
            // path_list: this.state.path_list.concat(path_list),
            // next_path_list: path_list,
            // next_dim_list: dim_list,
            // dim_list: this.state.dim_list.concat(dim_list),
            isLoading: false,
            page: this.state.page+1,
            current_index: -1
        })
    })

  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
          Dernières photos ajoutées
        </Text>
        <Image source={{uri: 'https:avatars2.githubusercontent.com/u/7970947?v=3&s=460'}} style={{width: 100, height: 100}}/>
        <Image source=
          {{
            uri: API_URL + 'get-full-image-raw',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + store.getState().userInfo.token
            },
            body: JSON.stringify({
              file_path: "ma-gallerie/qA9mDkFwpiHPaYTHBWPo.png"
            })
          }}
          style={{width: 100, height: 100}}/>

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
            full_path_list={this.state.full_path_list}
            full_dim_list={this.state.full_dim_list}
            current_index={this.state.current_index}
            // loadNextImages={this._loadNextImages}
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

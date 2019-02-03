import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import {getLatestImagesFromAPI, getFullImageFromAPI} from '../API/loadImages'
import ImageItem from './ImageItem'
import store from '../store/configureStore'
import {SecureStore} from 'expo';
import MyImageViewer from './MyImageViewer'

class Home extends React.Component {
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
      console.log(this.state.showImageViewer);
  }

  _loadImages () {
    this.setState({isLoading: true})
    getLatestImagesFromAPI(store.getState().userInfo.token).then(data => {

        var path_list = new Array(data.jsonData.latest_files.length).fill("")

        for (var i = 0; i < data.jsonData.latest_files.length; i++) {
          path_list[i] = data.jsonData.latest_files[i].file_path
        }

        this.setState({
            file_list: data.jsonData.latest_files,
            path_list: path_list,
            isLoading: false
        })

        console.log(this.state.path_list)
    })
  }

  _displayFullImage = (item, index) => {
    console.log(index);
    // getFullImageFromAPI(item.file_path, store.getState().userInfo.token).then((data) => {
    //   // console.log(data.jsonData)
    //   this.setState({
    //     'showImageViewer': true,
    //     'current_index': index
    //   })
    //   // this.props.navigation.navigate('ImageViewer', {image: data.jsonData})
    // })
    this.setState({
      'showImageViewer': true,
      'current_index': index
    })
  }

  render() {
    // this.state.file_list.foreEach(function (element) =>{
    //   console.log(element)
    // })
    // for (var i = 0; i < this.state.file_list.length; i++) {
    //   array[i]
    // }
    // list = this.state.file_list[0]
    // if(list != undefined){
    //   console.log(list.base64);
    // }
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_style}>
          Dernières photos ajoutées
        </Text>
        <View style={styles.main_container}>
          <FlatList
            data={this.state.file_list}
            keyExtractor={(item) => item.file_path.toString()}
            numColumns={numColumns}
            renderItem={({item, index}) =>
              <TouchableOpacity
                onPress={() => this._displayFullImage(item, index)}>
                <ImageItem
                  base64={item.base64}
                  path={item.file_path}
                />
              </TouchableOpacity>
            }
          />
          <MyImageViewer
            show={this.state.showImageViewer}
            path_list={this.state.path_list}
            current_index={this.state.current_index}
          />
        </View>
      </View>
    )
  }
}

const numColumns = 2

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 10,
  },
  text_style: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  images: {
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(Home)

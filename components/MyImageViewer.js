import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, Dimensions } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal } from 'react-native';
import {getFullImageFromAPI} from '../API/loadImages'
import store from '../store/configureStore'
import {BASE_URL, API_URL} from '../constants'


class MyImageViewer extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
        show: props.show,
        url_list: [],
        current_index: 0,
      }

  }

  _onCancel = () => {
    this.setState({show: false})
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.current_index == -1)//L'appel à cette fonction est générée par un changement de page, pas par un click
    {
      return // Dans ce cas là, on ne fait rien
    }

    var url_list = new Array(nextProps.full_path_list.length)

    for (var i = 0; i < url_list.length; i++) {
      var temp = nextProps.full_path_list[i]
      console.log(temp);
      url_list[i] = {
        url: "",
        loaded: false,
        props:
        {
          source: {
            file_path: nextProps.full_path_list[i],
            width: nextProps.full_dim_list[i].width,
            height: nextProps.full_dim_list[i].height
          },
          resizeMode: "contain",
        }
      }
    }

    this.setState({
      show: nextProps.show,
      url_list: url_list,
      current_index: nextProps.current_index
    });
  }

  _onChange = (index) => {
    this.state.current_index = index
  }

  render() {
    console.log("current index clicked");
    console.log(this.state.current_index);
      return (
          <Modal visible={this.state.show} transparent={true}>
              <ImageViewer
                imageUrls={this.state.url_list}
                onCancel = {this._onCancel}
                enableSwipeDown={true}
                enableImageZoom={true}
                onChange={this._onChange}
                index={this.state.current_index}
                swipeDownThreshold={50}
                enablePreload = {true}
                renderImage={ props =>
                    <Image {...props} source=
                      {{
                        uri: API_URL + 'get-full-image-raw',
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer ' + store.getState().userInfo.token
                        },
                        body: JSON.stringify({
                          file_path: props.source.file_path
                        })
                      }}
                      resizeMode= "contain"
                      />
                }
                />
          </Modal>
      )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
  image: {
    flex: 1,
    resizeMode: ImageResizeMode.contain
  },
})

export default MyImageViewer

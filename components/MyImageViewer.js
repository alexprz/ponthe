import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, Dimensions } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal } from 'react-native';
import {getFullImageFromAPI} from '../API/loadImages'
import store from '../store/configureStore'
import {BASE_URL, API_URL} from '../constants'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

import onLayout from 'react-native-on-layout'

class MyImageViewer extends React.Component {

  constructor(props) {
      super(props)

      this.state = {
        show: props.show,
        url_list: [],
        current_index: 0,
      }
  }

  componentDidMount() {
    // if(this.state.show){
    //   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    // }
  }

  componentWillUnmount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  _onCancel = () => {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
    this.setState({show: false})
  }

  componentWillReceiveProps(nextProps) {

    // if(this.state.show){
    //   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    // }
    // else{
    //   Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
    // }

    if(nextProps.current_index == -1)//L'appel à cette fonction est générée par un changement de page, pas par un click
    {
      return // Dans ce cas là, on ne fait rien
    }

    var url_list = new Array(nextProps.full_path_list.length)

    for (var i = 0; i < url_list.length; i++) {
      var temp = nextProps.full_path_list[i]
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
      const styles = StyleSheet.create({
        main_container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: "black"
        },
        image: {
          flex: 1,
          // transform: [{ rotate: '90deg'}]
          // resizeMode: ImageResizeMode.contain
        },
        view: {
          width: '100%',
          height: '100%',
          // width: wp('100%'),
          // height: hp('100%'),
          flexDirection: 'column',
        },
        modal: {
          // width: wp('100%'),
          // height: hp('100%'),
          width: '100%',
          height: '100%',
          // flexDirection: 'column',
        },
      })

      return (
          <Modal
            visible={this.state.show}
            transparent={true}
            >
            <View style={styles.view}>
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
                      style = {[props.style, styles.image]}
                      />

                }
                />

                </View>
          </Modal>
      )
  }
}

// const styles = StyleSheet.create({
//   main_container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "black"
//   },
//   image: {
//     flex: 1,
//     resizeMode: ImageResizeMode.contain
//   },
//   modal: {
//     width: wp('84.5%'),
//     height: hp('17%'),
//   },
// })

export default MyImageViewer

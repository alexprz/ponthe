import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal } from 'react-native';
import {getFullImageFromAPI} from '../API/loadImages'
import store from '../store/configureStore'


// const images = [{
//     // Simplest usage.
//     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
//
//     // width: number
//     // height: number
//     // Optional, if you know the image size, you can set the optimization performance
//
//     // You can pass props to <Image />.
//     // props: {
//     //     // headers: ...
//     // }
// }
// //  {
// //     // props: {
// //     //     // Or you can set source directory.
// //     //     source: require('../background.png')
// //     // }
// // }
// ]

class MyImageViewer extends React.Component {

  constructor(props) {
      super(props)
      // console.log(props.show)

      this.state = {
        show: props.show,
        path_list: props.path_list,
        url_list: [],
        current_index: 0,
        first_load: true,
        // page: 1
      }

      console.log("first_load");
      console.log(this.state.first_load);
  }

  // render() {
  //   const encodedData = this.props.navigation.state.params.image.base64
  //   const width = this.props.navigation.state.params.image.width
  //   const height = this.props.navigation.state.params.image.height
  //   // console.log(encodedData)
  //   return (
  //     <View style={styles.main_container}>
  //       <Image
  //         style={[styles.image, {width: width, height: height}]}
  //         source={{uri: `data:image/jpg;base64,${encodedData}`}}
  //       />
  //     </View>
  //   )
  // }

  _onCancel = () => {
    console.log("swipe down")
    // console.log(this.props.navigation.navigate('Home'))
    this.setState({show: false})
  }

  componentWillReceiveProps(nextProps) {
    // var dict = []

    // for (var i = 0; i < nextProps.base64_list.length; i++) {
    //   dict.push({
    //     "key": nextProps.base64_list[i].file_path,
    //     "value": nextProps.base64_list[i].base64
    //   })
    // }

    console.log(nextProps.current_index);
    if(nextProps.current_index == -1)//L'appel à cette fonction est générée par un changement de page, pas par un click
    {
      console.log("current index -1");
      return

    }

    console.log("receive new props");
    console.log(this.state.first_load);
    console.log(nextProps.current_index)
    if(this.state.first_load){
      var url_list = new Array(nextProps.path_list.length).fill({url: "", loaded:false})
      this.state.first_load = false
    }
    else {
      console.log("loading from previous");
      var url_list = this.state.url_list
    }

    this.state.url_list = url_list
    this.state.path_list = nextProps.path_list,
    this.state.current_index = nextProps.current_index

    // this.setState({
    //   // show: nextProps.show,
    //   url_list: url_list,
    //   path_list: nextProps.path_list,
    //   current_index: nextProps.current_index
    // });


    var clicked_index = nextProps.current_index
    this.triload(clicked_index, true)
    // Load clicked image
    // console.log("loading clicked");
    // getFullImageFromAPI(nextProps.path_list[clicked_index], store.getState().userInfo.token).then((data) => {
    //   url_list[clicked_index] = {
    //     url: data.jsonData.base64,
    //     props: {
    //       resizeMode: "contain",
    //       style: {
    //         width: data.jsonData.width,
    //         height: data.jsonData.height
    //       }
    //     }
    //   }
    //
    //   this.setState({
    //     show: nextProps.show,
    //     url_list: url_list,
    //     path_list: nextProps.path_list,
    //     current_index: nextProps.current_index
    //   });
    //
    //   console.log("clicked loaded");
    // })
    //
    // if (clicked_index-1 >= 0){
    //   console.log("loading previous");
    //   getFullImageFromAPI(nextProps.path_list[clicked_index-1], store.getState().userInfo.token).then((data) => {
    //     url_list[clicked_index-1] = {
    //       url: data.jsonData.base64,
    //       props: {
    //         resizeMode: "contain",
    //         style: {
    //           width: data.jsonData.width,
    //           height: data.jsonData.height
    //         }
    //       }
    //     }
    //     console.log("previous loaded");
    //   })
    // }
    // else {
    //   console.log("previous already loaded");
    // }
    //
    // if (clicked_index+1 < nextProps.path_list.length){
    //   console.log("loading next");
    //   getFullImageFromAPI(nextProps.path_list[clicked_index+1], store.getState().userInfo.token).then((data) => {
    //     url_list[clicked_index+1] = {
    //       url: data.jsonData.base64,
    //       props: {
    //         resizeMode: "contain",
    //         style: {
    //           width: data.jsonData.width,
    //           height: data.jsonData.height
    //         }
    //       }
    //     }
    //     console.log("next loaded");
    //   })
    // }
    // else {
    //   console.log("next already loaded");
    // }

  }

  _onChange = (index) => {
    console.log("change");

    this.triload(index)
    // console.log(this.state.path_list);

    // if (this.state.url_list[index].url == ""){ // Not loaded yet
    //   console.log("loading clicked");
    //   getFullImageFromAPI(this.state.path_list[index], store.getState().userInfo.token).then((data) => {
    //     this.state.url_list[index] = {
    //       url: data.jsonData.base64,
    //       props: {
    //         resizeMode: "contain",
    //         style: {
    //           width: data.jsonData.width,
    //           height: data.jsonData.height
    //         }
    //       }
    //     }
    //     console.log("clicked loaded");
    //   })
    // }
    // else {
    //   console.log("clicked already loaded");
    // }
    //
    // if (index-1 >= 0 && this.state.url_list[index-1].url == ""){ // Not loaded yet
    //   console.log("loading previous");
    //   getFullImageFromAPI(this.state.path_list[index-1], store.getState().userInfo.token).then((data) => {
    //     this.state.url_list[index-1] = {
    //       url: data.jsonData.base64,
    //       props: {
    //         resizeMode: "contain",
    //         style: {
    //           width: data.jsonData.width,
    //           height: data.jsonData.height
    //         }
    //       }
    //     }
    //     console.log("previous loaded");
    //   })
    // }
    // else {
    //   console.log("previous already loaded");
    // }
    //
    // if (index+1 < this.state.url_list.length && this.state.url_list[index+1].url == ""){ // Not loaded yet
    //   console.log("loading next");
    //   getFullImageFromAPI(this.state.path_list[index+1], store.getState().userInfo.token).then((data) => {
    //     this.state.url_list[index+1] = {
    //       url: data.jsonData.base64,
    //       props: {
    //         resizeMode: "contain",
    //         style: {
    //           width: data.jsonData.width,
    //           height: data.jsonData.height
    //         }
    //       }
    //     }
    //     console.log("next loaded");
    //   })
    // }
    // else {
    //   console.log("next already loaded");
    // }

  }

  triload (index, refresh_show = false) {
    if (!this.state.url_list[index].loaded){ // Not loaded yet
      console.log("loading clicked");
      getFullImageFromAPI(this.state.path_list[index], store.getState().userInfo.token).then((data) => {
        this.state.url_list[index] = {
          loaded: true,
          url: data.jsonData.base64,
          props: {
            resizeMode: "contain",
            style: {
              width: data.jsonData.width,
              height: data.jsonData.height
            }
          }
        }
        if(refresh_show){
          this.setState({
            show: true
          });
        }
        console.log("clicked loaded");
      })
    }
    else {
      if(refresh_show){
        this.setState({
          show: true
        });
      }
      console.log("clicked already loaded");
    }

    if (index-1 >= 0 && !this.state.url_list[index-1].loaded){ // Not loaded yet
      console.log("loading previous");
      getFullImageFromAPI(this.state.path_list[index-1], store.getState().userInfo.token).then((data) => {
        this.state.url_list[index-1] = {
          loaded: true,
          url: data.jsonData.base64,
          props: {
            resizeMode: "contain",
            style: {
              width: data.jsonData.width,
              height: data.jsonData.height
            }
          }
        }
        console.log("previous loaded");
      })
    }
    else {
      console.log("previous already loaded");
    }

    if (index+1 < this.state.url_list.length && !this.state.url_list[index+1].loaded){ // Not loaded yet
      console.log("loading next");
      getFullImageFromAPI(this.state.path_list[index+1], store.getState().userInfo.token).then((data) => {
        this.state.url_list[index+1] = {
          loaded: true,
          url: data.jsonData.base64,
          props: {
            resizeMode: "contain",
            style: {
              width: data.jsonData.width,
              height: data.jsonData.height
            }
          }
        }
        console.log("next loaded");
      })
    }
    else {
      console.log("next already loaded");
    }
  }



  render() {
      // console.log(this.state.base64_list)
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
                />
          </Modal>
      )
  }
}

const loaderGif = require('../images/loader.gif')
console.log(loaderGif);

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
  // loading_container: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 100,
  //   bottom: 0,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
})

export default MyImageViewer

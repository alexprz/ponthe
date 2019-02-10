import React from 'react'
import { StyleSheet, Image } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { API_URL } from '../constants'
import store from '../store/configureStore'

class ImageItem extends React.Component {

  constructor(props) {
      super(props)
  }


  render() {
    const encodedData = this.props.base64
    console.log("");
    console.log(this.props.path)
    // file_info["base64"].splice(0, 2)
    return (
        <Image
          style={this.props.style}
          // source={{uri: encodedData}}//'https://facebook.github.io/react/logo-og.png'}}//`data:image/jpg;base64,${encodedData}`}}
          source={{
              uri: API_URL + 'get-thumb-image-raw-url/' + this.props.path.replace('/',''),
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + store.getState().userInfo.token
              },
              body: JSON.stringify({
                file_path: this.props.path
              })
            }}
        />
    )
  }
}

const styles = StyleSheet.create({
    // image: {
    //   // flex: 1,
    //   // margin: 5,
    //   // padding: 5,
    //   width: "100%",
    //   height: 150,
    //   // width: "100%",
    //   // height: "100%",
    //   // resizeMode: ImageResizeMode.contain
    //   // backgroundColor: '#DDDDDD'
    // }
})

export default ImageItem

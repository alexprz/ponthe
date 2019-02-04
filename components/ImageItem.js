import React from 'react'
import { StyleSheet, Image } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

class ImageItem extends React.Component {

  constructor(props) {
      super(props)
  }


  render() {
    const encodedData = this.props.base64
    // console.log(this.props.path)
    // file_info["base64"].splice(0, 2)
    return (
        <Image
          style={this.props.style}
          source={{uri: encodedData}}//'https://facebook.github.io/react/logo-og.png'}}//`data:image/jpg;base64,${encodedData}`}}
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

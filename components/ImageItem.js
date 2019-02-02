import React from 'react'
import { StyleSheet, Image } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

class ImageItem extends React.Component {



  render() {
    const encodedData = this.props.base64
    // console.log(this.props.path)
    // file_info["base64"].splice(0, 2)
    return (
        <Image
          style={styles.image}
          source={{uri: encodedData}}//'https://facebook.github.io/react/logo-og.png'}}//`data:image/jpg;base64,${encodedData}`}}
        />
    )
  }
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      margin: 5,
      width: 226,
      height: 226
      // resizeMode: ImageResizeMode.contain
      // backgroundColor: '#DDDDDD'
    }
})

export default ImageItem

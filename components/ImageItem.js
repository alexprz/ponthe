import React from 'react'
import { StyleSheet, Image } from 'react-native'

class ImageItem extends React.Component {



  render() {
    const file_info = this.props.file_info
    const encodedData = file_info["base64"]
    console.log(file_info["file_path"])
    // file_info["base64"].splice(0, 2)
    return (
        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react/logo-og.png'}}//`data:image/jpg;base64,${encodedData}`}}
        />
    )
  }
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      margin: 5,
      width: 150,
      height: 150,
      backgroundColor: '#DDDDDD'
    }
})

export default ImageItem

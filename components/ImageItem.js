import React from 'react'
import { StyleSheet, Image, ImageBackground, View, Text } from 'react-native'
import store from '../store/configureStore'
import { API_URL } from '../constants'

class ImageItem extends React.Component {

  constructor(props) {
      super(props)
  }

  render() {
    const encodedData = this.props.base64
    return (
        <ImageBackground
          style={this.props.style}
          source={{
              uri: API_URL + 'get-thumb-image-raw/' + this.props.path.replace('/',''), //Url doit etre different pour 2 photos differentes (meme par methode post) pour empecher de mettre en cache
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + store.getState().userInfo.token,
              },
              body: JSON.stringify({
                file_path: this.props.path
              })
            }}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={this.props.textStyle}> {this.props.title} </Text>
        </View>
        </ImageBackground>
    )
  }
}

export default ImageItem

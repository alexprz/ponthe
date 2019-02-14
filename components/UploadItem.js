import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { API_URL } from '../constants'
import store from '../store/configureStore'
import { List, ListItem } from 'react-native-elements'

class UploadItem extends React.Component {

  constructor(props) {
      super(props)
  }

  render() {
    const encodedData = this.props.base64
    return (
        <ListItem
          leftAvatar={{ source: {
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
          } }}
          title={this.props.title}
        />
    )
  }
}

export default UploadItem

import React from 'react'
import { StyleSheet, View, Text, TextInput,
  TouchableOpacity, Alert } from 'react-native'
import { requestEquipmentViaAPI } from '../API/miscFunctions.js'
import store from '../store/configureStore.js'
import { ponthe_color } from '../constants.js'

class Equipment extends React.Component {

  constructor(props) {
    super(props)
    this.device = ''
    this.message = ''
    this.state = {
      messageHeight: 40,
      msg: ''
    }
  }

  _deviceInputChanged(device) {
    this.device = device
  }

  _messageInputChanged(message) {
    this.message = message
  }

  // To adapt the height of the TextInput according to the size of message
  // The TextInput's height grows when the message spreads on several lines
  _updateSize(height) {
    this.setState({messageHeight: height})
  }

  _raiseRequestAlert() {
    Alert.alert(
      'Demande envoyée au Ponthé',
      'L\'équipe te répondra au plus vite !',
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
      ],
        { cancelable: false }
    )
  }

  // Method that calls the API function (POST) materiel in order to borrow
  // equipment
  _requestEquipment() {
    if (this.device == '')
      this.setState({msg:"Matériel désiré manquant"})
    else {
      if (this.message == '')
        this.setState({msg:"Raisons de l'emprunt manquantes"})
      else {
        requestEquipmentViaAPI(this.device, this.message,
        store.getState().userInfo.token).then(res => {
          if (res.statusCode == 200) {
            this._raiseRequestAlert()
          }
          else {
            this.setState({msg:res.jsonData.msg})
            console.log(res.jsonData.msg)
          }
        })
      }
    }
  }

  render() {
    growingInputTextStyle = {
      height: this.state.messageHeight
    }
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text_style}>
          Matériel
        </Text>
        <View style={styles.content_container}>
          <Text>Pour envoyer une demande d'emprunt de matériel au Ponthé,
          renseigne les champs ci-dessous </Text>
          <View style={styles.inputs_container}>
          <TextInput
            style={styles.input_text}
            placeholder = 'Matériel désiré'
            onChangeText = {(text) => this._deviceInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
           />
           <TextInput
              style={growingInputTextStyle}
              multiline={true}
              onContentSizeChange={(e) =>
                this._updateSize(e.nativeEvent.contentSize.height)}
              maxLength={200}
              placeholder = "Raisons de l'emprunt (200 car max)"
              onChangeText = {(text) => this._messageInputChanged(text)}
              autoCapitalize = 'none'
              autoCorrect = {false}
            />
            <Text style={styles.message}>
              {this.state.msg}
            </Text>
          </View>
          <View style = {styles.button_container}>
            <TouchableOpacity
              style = {styles.main_button_shape}
              onPress = {() => this._requestEquipment()}>
              <Text style = {styles.main_button_text}>
                Envoyer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    margin: 10,
    marginTop: 25,
    paddingHorizontal: 60
  },
  title_text_style: {
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  content_container: {
    flex: 1,
    justifyContent: 'center'
  },
  inputs_container: {
    marginTop: 10
  },
  input_text: {
    height: 40
  },
  message: {
    marginTop: 15,
    fontStyle: 'italic',
    color: 'red'
  },
  button_container: {
    alignItems: 'center',
    marginTop: 20
  },
  main_button_shape: {
    height: 50,
    width: 180,
    borderRadius: 25,
    backgroundColor: ponthe_color,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main_button_text: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Equipment

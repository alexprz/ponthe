import React from 'react'
import { StyleSheet, View, Text, TextInput,
  TouchableOpacity, Alert } from 'react-native'
import { changePassword } from '../API/connexion'
import store from '../store/configureStore'
import { ponthe_color } from '../constants'

class Settings extends React.Component {

  constructor(props) {
    super(props)
    this.newPassword = ''
    this.confirmationPassword = ''
    this.state = {
      msg: ''
    }
  }

  _currentPasswordInputChanged(currentPassword) {
      this.currentPassword = currentPassword
  }

  _newPasswordInputChanged(newPassword) {
    this.newPassword = newPassword
  }

  _confirmationPasswordInputChanged(confirmationPassword) {
    this.confirmationPassword = confirmationPassword
  }
  _raiseResetAlert() {
    Alert.alert(
      'Mot de passe changé',
      'Ton mot de passe a été changé',
      [{text: 'OK', onPress: () => null}],
      {cancelable: false}
    )
  }

  // Method that calls the API function (POST) reset/{token} in order to change
  // user password
  _change() {
    if (this.newPassword != this.confirmationPassword) {
        this.setState({msg:"Les deux mots de passe ne correspondent pas"})
    }
    else {
        console.log(this.currentPassword)
        changePassword(this.currentPassword, this.newPassword,
          store.getState().userInfo.token).then(res => {
          if (res.statusCode == 200) {
            this._raiseResetAlert()
          }
          else {
            this.setState({msg:res.jsonData.msg})
            console.log(store.getState().userInfo.token)
            console.log(res.jsonData.msg)
          }
        })
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text_style}>
          Paramètres
        </Text>
        <View style={styles.content_container}>
          <Text>Pour changer ton mot de passe, </Text>
          <Text>renseigne les champs ci-dessous </Text>
          <View style={styles.inputs_container}>
          <TextInput
            style={styles.input_text}
            placeholder = 'Mot de passe actuel'
            onChangeText = {(text) => this._currentPasswordInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
           />
           <TextInput
              style={styles.input_text}
              placeholder = 'Nouveau mot de passe'
              onChangeText = {(text) => this._newPasswordInputChanged(text)}
              autoCapitalize = 'none'
              autoCorrect = {false}
              secureTextEntry = {true}
            />
            <TextInput
              style={styles.input_text}
              placeholder = 'Confirmation de mot de passe'
              onChangeText =
                {(text) => this._confirmationPasswordInputChanged(text)}
              autoCapitalize = 'none'
              autoCorrect = {false}
              secureTextEntry = {true}
            />
            <Text style={styles.message}>
              {this.state.msg}
            </Text>
          </View>
          <View style = {styles.button_container}>
            <TouchableOpacity
              style = {styles.main_button_shape}
              onPress = {() => this._change()}>
              <Text style = {styles.main_button_text}>
                Changer
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
    marginVertical: 5,
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

export default Settings

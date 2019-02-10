import React from 'react'
import { StyleSheet, View, Text, TextInput,
  TouchableOpacity, Alert } from 'react-native'
import { resetPassword } from '../API/connexion'
import { ponthe_color } from '../constants'

class Reset extends React.Component {

  constructor(props) {
    super(props)
    this.email = ''
  }

  _emailInputChanged(email) {
    this.email = email
  }

  _raiseResetAlert() {
    Alert.alert(
      'Réinitialisation du mot de passe',
      'Un mail de réinitialisation de mot de passe t\'a été envoyé sur ton adresse Zimbra',
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('SignIn')},
      ],
        { cancelable: false }
    )
  }

  // Method that calls the API function (POST) register in order to create
  // a new account
  _reset() {
    resetPassword(this.email).then(res => {
      if (res.statusCode == 200) {
        this._raiseRegisterAlert();
      }
      else {
        this.setState({msg:res.jsonData.msg})
        //this.setState({msg:
        //  this._translateErrorMessage(res.statusCode, res.jsonData.msg)})
      }
    })
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text> Reset </Text>
        <View style={styles.inputs_container}>
          <TextInput
            style={styles.input_text}
            placeholder = 'Email - prenom.nom@eleves.enpc.fr'
            onChangeText = {(text) => this._emailInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
        </View>
        <View style = {styles.button_container}>
          <TouchableOpacity
            style = {styles.main_button_shape}
            onPress = {() => this.reset()}>
            <Text style = {styles.main_button_text}>
              Réinitialiser mot de passe
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputs_container: {
    marginTop: 20,
    marginHorizontal: 60
  },
  input_text: {
    height: 40
  },
  button_container: {
    alignItems: 'center',
    marginTop: 20
  },
  main_button_shape: {
    marginBottom: 15,
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

export default Reset
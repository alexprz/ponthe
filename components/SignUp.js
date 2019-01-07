import React from 'react'
import { StyleSheet, View, TextInput, Text,
  TouchableOpacity } from 'react-native'
import { ponthe_color } from '../constants'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
    this.email = ''
    this.password = ''
  }

  _emailInputChanged(email) {
    this.email = email
  }

  _passwordInputChanged(password) {
    this.password = password
  }

  _register() {

  }

  render() {
    return (
      <View style = {styles.main_container}>
        <View style={styles.inputs_container}>
          <TextInput
            style={styles.input_text}
            placeholder = 'Prénom'
            onChangeText = {(text) => this._firstNameInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <TextInput
            style={styles.input_text}
            placeholder = 'Nom'
            onChangeText = {(text) => this._lastNameChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <TextInput
            style={styles.input_text}
            placeholder = 'Email - prenom.nom'
            onChangeText = {(text) => this._emailInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <TextInput
            style={styles.styles.input_text}
            placeholder = 'Mot de passe'
            onChangeText = {(text) => this._passwordInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
          />
          <TextInput
            style={styles.styles.input_text}
            placeholder = 'Confirmation de mot de passe'
            onChangeText = {(text) =>
              this._confirmationPasswordInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
          />
          <TextInput
            style={styles.styles.input_text}
            placeholder = 'Promotion'
            onChangeText = {(text) =>
              this._promotionYearInputChanged(text)}
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
            onPress = {() => this._register()}>
            <Text style = {styles.main_button_text}>
              Créer un compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  inputs_container: {
    marginTop: 20,
    marginHorizontal: 90
  },
  input_text: {
    height: 40
  },
  message: {
    marginVertical: 10,
    fontStyle: 'italic',
    color: 'red'
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

export default SignUp

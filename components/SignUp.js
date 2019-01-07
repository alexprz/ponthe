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
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.password = ''
    this.passwordConfirmation = ''
    this.promotionYear = ''
  }

  _firstNameInputChanged(firstName) {
    this.firstName = firstName
  }

  _lastNameInputChanged(lastName) {
    this.lastName = lastName
  }

  _emailInputChanged(email) {
    this.email = email
  }

  _passwordInputChanged(password) {
    this.password = password
  }

  _passwordConfirmationInputChanged(password) {
    this.passwordConfirmation = password
  }

  _promotionYearInputChanged(promo) {
    this.promotionYear = promo
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
            onChangeText = {(text) => this._lastNameInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <View style={styles.email_container}>
            <TextInput
              style={styles.email_input_text}
              placeholder = 'Email - prenom.nom'
              onChangeText = {(text) => this._emailInputChanged(text)}
              autoCapitalize = 'none'
              autoCorrect = {false}
            />
            <Text style={styles.email_fix_text}>
              @eleves.enpc.fr
            </Text>
          </View>
          <TextInput
            style={styles.input_text}
            placeholder = 'Mot de passe'
            onChangeText = {(text) => this._passwordInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
          />
          <TextInput
            style={styles.input_text}
            placeholder = 'Confirmation de mot de passe'
            onChangeText = {(text) =>
              this._passwordConfirmationInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
          />
          <TextInput
            style={styles.input_text}
            placeholder = 'Promotion'
            onChangeText = {(text) =>
              this._promotionYearInputChanged(text)}
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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 50
  },
  inputs_container: {
    marginTop: 20,
    marginHorizontal: 60
  },
  input_text: {
    height: 40
  },
  email_container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  email_input_text: {
    justifyContent: 'flex-start'
  },
  email_fix_text: {
    paddingLeft: 5
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

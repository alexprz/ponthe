import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, TextInput, Text,
  TouchableOpacity } from 'react-native'
import { getToken, getUserInfoByToken } from '../API/connexion'
import UserInfo from '../lib/userClass'
import { ponthe_color } from '../constants'
import store from '../store/configureStore'
// import {SecureStore} from 'expo';
import {AsyncStorage} from 'react-native';


class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
    this.email = ''
    this.password = ''
    this.token = ''
    this._retrieveToken()
  }

  _retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@Ponthe:token');
      if (value !== null) {
        this.token = value
        const userInfo = new UserInfo()
        userInfo.email = this.email
        userInfo.token = value
        const action = { type: "UPDATE_USERIDS", value: userInfo }
        this.props.dispatch(action)
        this._loadUserNames(userInfo.token)
        store.dispatch(action)
        this.props.navigation.navigate('Home')
      }
    } catch (error) {
      await AsyncStorage.removeItem('@Ponthe:token');
    }
  };

  _storeToken = async (token) => {
    await AsyncStorage.setItem('@Ponthe:token', token);
  };

  _emailInputChanged(email) {
    this.email = email
  }

  _passwordInputChanged(password) {
    this.password = password
  }

  _translateErrorMessage(statusCode, msg) {
    if (statusCode == 400) {
      if (msg.includes('password')) {
        return 'Mot de passe manquant'
      }
      else {
        return 'Email manquant'
      }
    }
    if (statusCode == 401) {
      return 'Email ou mot de passe incorrect'
    }
    else {
      return msg
    }
  }

  _getUserNames(token) {
    getUserInfoByToken(token).then(res => {
      if (res.statusCode == 200) {
        const userInfo = new UserInfo()
        userInfo.email = res.jsonData.email
        userInfo.firstName = res.jsonData.firstname
        userInfo.lastName = res.jsonData.lastname
        userInfo.token = token
        return userInfo
      }
    })
  }

  _loadUserNames(token) {
    getUserInfoByToken(token).then(res => {
      if (res.statusCode == 200) {
        const userInfo = new UserInfo()
        userInfo.firstName = res.jsonData.firstname
        userInfo.lastName = res.jsonData.lastname
        const action = { type: "UPDATE_USERNAMES", value: userInfo }
        this.props.dispatch(action)
        store.dispatch(action)
      }
      else console.log(res.statusCode)
    })
  }

  _connexion() {
    getToken(this.email, this.password).then(res => {
      if (res.statusCode == 200) {
        const userInfo = new UserInfo()
        userInfo.email = this.email
        userInfo.token = res.jsonData.token
        const action = { type: "UPDATE_USERIDS", value: userInfo }
        this.props.dispatch(action)
        this._loadUserNames(userInfo.token)
        store.dispatch(action)
        this._storeToken(userInfo.token)
        this.props.navigation.navigate('Home')
      }
      else {
        this.setState({msg:
          this._translateErrorMessage(res.statusCode, res.jsonData.msg)})
      }
    })
  }

  _register() {
    this.props.navigation.navigate('SignUp')
  }

  // Attempt to fix async issues
  // _connexion() {
  //   getToken(this.email, this.password).then(res => {
  //     if (res.statusCode == 200) {
  //       userInfo = this._getUserNames(res.jsonData.token)
  //       const action = { type: "UPDATE_USERIDS", value: userInfo }
  //       this.props.dispatch(action)
  //       this.props.navigation.navigate('Home')
  //     }
  //     else {
  //       this.setState({msg: res.jsonData.msg})
  //     }
  //   })
  // }

  // Temporary function to shortcut sign in
  _shortCutConnexion() {
    const userInfo = new UserInfo()
    userInfo.token = 'token'
    userInfo.email = 'user@eleves.enpc.fr'
    const action = { type: "UPDATE_USERIDS", value: userInfo }
    this.props.dispatch(action)
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style = {styles.main_container}>
        <View style = {styles.image_container}>
          <Image
            source = {sourceLogo}
            style= {styles.image}
          />
        </View>
        <View style={styles.ids_container}>
          <TextInput
            style={styles.ids_text}
            placeholder = 'Email - prenom.nom@eleves.enpc.fr'
            onChangeText = {(text) => this._emailInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <TextInput
            style={styles.ids_text}
            placeholder = 'Mot de passe'
            onChangeText = {(text) => this._passwordInputChanged(text)}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry = {true}
          />
          <Text style={styles.message}>
            {this.state.msg}
          </Text>
        </View>
        <View style = {styles.buttons_container}>
          <TouchableOpacity
            style = {styles.main_button_shape}
            onPress = {() => this._connexion()}>
            <Text style = {styles.main_button_text}>
              Connexion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.secondary_button_shape}
            onPress = {() => this.props.navigation.navigate('SignUp')}>
            <Text style = {styles.secondary_button_text}>
              Créer un compte
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.secondary_button_shape}
            onPress = {() => this._shortCutConnexion()}>
            <Text style = {styles.secondary_button_text}>
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const sourceLogo = require('../images/ponthe_logo.png')

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image_container: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    height: 220,
    width: 220
  },
  ids_container: {
    marginTop: 20,
    marginHorizontal: 70
  },
  ids_text: {
    height: 40
  },
  message: {
    marginVertical: 10,
    fontStyle: 'italic',
    color: 'red'
  },
  buttons_container: {
    flex: 2,
    justifyContent: 'flex-start',
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
  },
  secondary_button_shape: {
    margin: 5
  },
  secondary_button_text: {
    fontStyle: 'italic',
    color: 'lightgray'
  }
})

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(SignIn)

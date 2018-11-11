import React from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'
import { getToken } from '../API/connexion'

class Connexion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
        this.email = ""
        this.password = ""
    }

    _emailInputChanged(email) {
        this.email = email
    }

    _passwordInputChanged(password) {
        this.password = password
    }

    _connexion() {
        getToken(this.email, this.password).then((responseJson) => {
            if(responseJson.msg != undefined)
                this.setState({ msg: responseJson.msg })
                console.log(responseJson.msg)
            if(responseJson.token != undefined)
                console.log(responseJson.token)
        })


    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.connexion_card}>
                    <Text style={styles.message}>
                        {this.state.msg}
                    </Text>
                    <TextInput
                        style={styles.text_input}
                        placeholder = 'Identifiant'
                        onChangeText = {(text) => this._emailInputChanged(text)}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    <TextInput
                        style={styles.text_input}
                        placeholder = "Mot de passe"
                        onChangeText = {(text) => this._passwordInputChanged(text)}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        secureTextEntry = {true}
                    />
                    <Button style = {styles.button} title='Connexion' onPress={() => this._connexion()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    connexion_card: {
        width: 300,
        height: 150,
        alignItems: 'stretch',
        // backgroundColor: 'green',
    },
    text_input: {
        height: 50,
        // flex: 3,
    },
    button: {
        // flex: 3
    },
    message: {
        color: 'red',
        // width: 50,
        // flex: 1
    }
})

export default Connexion

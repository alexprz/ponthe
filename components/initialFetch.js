import React from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'
import { isLogged } from '../API/connexion'

class Connexion extends React.Component {

    constructor(props) {
        super(props)
        if(isLogged())
            this.props.navigation.navigate("Home")
        else
            this.props.navigation.navigate("Connexion")
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.connexion_card}>
                    <Text style={styles.message}>
                        Ponthé
                    </Text>
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
    message: {
        height: 30,
        // width: 50,
        // flex: 1
    }
})

export default Connexion

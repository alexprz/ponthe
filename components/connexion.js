import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Connexion extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.connexion_card}>
                    <TextInput style={styles.text_input} placeholder='Identifiant'/>
                    <TextInput style={styles.text_input} placeholder="Mot de passe"/>
                    <Button style={styles.button} title='Connexion' onPress={() => {}}/>
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
        width: 300
    },
    text_input: {
        height: 50,
    },
    button: {
    }
})

export default Connexion

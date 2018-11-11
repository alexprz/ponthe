import { createStackNavigator } from 'react-navigation'
import Connexion from '../components/connexion'
import Home from '../components/home'

const ConnexionStackNavigator = createStackNavigator({
    Connexion: {
        screen: Connexion,
        navigationOptions: {
            title: 'Connexion'
        }
    },
    Home: {
        screen: Home
    }
})

export default ConnexionStackNavigator

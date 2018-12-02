import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Connexion from '../components/connexion'
import Home from '../components/home'
import Gallery from '../components/Gallery'

const HomeTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Gallery: {
    screen: Gallery
  },
  Upload: {
    screen: Gallery
  },
  Miscellaneous: {
    screen: Gallery
  }
},{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF'
  }
})

const ConnexionStackNavigator = createStackNavigator({
  Connexion: {
    screen: Connexion,
    navigationOptions: {
      title: 'Connexion'
    }
  },
  Home: {
    screen: HomeTabNavigator,
    navigationOptions: {
      title: 'Page d\'accueil'
    }
  }
})

//export default ConnexionStackNavigator
export default HomeTabNavigator

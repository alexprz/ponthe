import { Alert } from 'react-native'
// export const BASE_URL = "https://ponthe-testing.enpc.org/"
export const BASE_URL = "http://localhost:7000/"
// export const BASE_URL = "http://192.168.0.17:7000/"
export const API_URL = BASE_URL + "api/"//"http://localhost:7000/api/"
// export const API_URL = "http://localhost:7000/api/"

// URL of the Ponthe API
//export const API_URL = "http://localhost:7000/api/"
//export const API_URL = "https://ponthe-testing.enpc.org/api/"

// Main yellow color throughout the app
export const ponthe_color = '#FFCC00'

// Function to alert when a functionality is unavailable yet
export const raiseAlertUnvailable = () => (
  Alert.alert(
    'Fonctionnalité indisponible',
    'Cette fonctionnalité est indiponible pour le moment',
    [
      {text: 'OK', onPress: () => null},
    ],
      { cancelable: true }
  )
)

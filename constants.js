import { Alert } from 'react-native'

// URL of the Ponthe API
export const API_URL = "http://localhost:7000/api/"
// export const API_URL = "https://ponthe-testing.enpc.org/api/"

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

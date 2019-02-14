import { processAPIResponse } from './commons.js'
import { API_URL } from '../constants.js'

export function getMembersFromAPI(token) {
  return fetch(API_URL + "members", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

export function requestEquipmentViaAPI(device, message, token) {
  return fetch(API_URL + "materiel", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      device: device,
      message: message})
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

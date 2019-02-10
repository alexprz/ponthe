import { processAPIResponse } from './commons.js'
import { API_URL } from '../constants.js'

export function getMembers() {
  return fetch(API_URL + "members", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'}
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

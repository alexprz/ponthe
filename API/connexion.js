import { processAPIResponse } from './commons.js'
import { API_URL } from '../constants.js'

export function getToken(email, password) {
  return fetch(API_URL + "login", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password})
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

export function getUserInfoByToken(token) {
  return fetch(API_URL + "get_user_by_jwt", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token }
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

// Is this still necessary?
// export function isLogged() {
//   loadUser().then((responseJson) => {
//     return responseJson.logged_in_as != undefined
//   })
// }

export function postRegistration(firstName, lastName, email,
  password, passwordConfirmation, promotionYear) {
  return fetch(API_URL + "register", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      confirmation_password: passwordConfirmation,
      promotion: promotionYear})
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

export function resetPassword(email) {
  return fetch(API_URL + "reset/", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email})
  })
  .then(processAPIResponse)
  .catch(error => console.error(error))
}

import { API_URL } from '../constants'

function processAPIResponse(response) {
  const statusCode = response.status;
  const jsonData = response.json();
  return Promise.all([statusCode, jsonData]).then(res => ({
    statusCode: res[0],
    jsonData: res[1]
  }))
}

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

// export function getUserNames(token) {
//   return fetch(API_URL + "get_user_by_jwt", {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer '+token }
//   })
//   .then(processAPIResponse)
//   .catch(error => console.error(error))
// }


export function isLogged() {
    loadUser().then((responseJson) => {
        return responseJson.logged_in_as != undefined
    })
}

export default getToken

import { API_URL } from '../constants'

function processAPIResponse(response) {
  // console.log(response)
  const statusCode = response.status;
  const jsonData = response.json();
  return Promise.all([statusCode, jsonData]).then(res => ({
    statusCode: res[0],
    jsonData: res[1]
  }))
}

export function getLatestImagesFromAPI(token) {
  return fetch(API_URL + "get-latest-images", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token  }
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

export function getAllYearsFromAPI(token) {
  return fetch(API_URL + "get-galleries-by-year", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token}
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}


export function getImagesFromAPI(gallery_slug, token) {
  return fetch(API_URL + "get-images/" + gallery_slug, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token  }
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

export function getFullImageFromAPI(file_path, token) {
  return fetch(API_URL + "get-full-image", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token  },
      body: JSON.stringify({
        file_path: file_path})
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

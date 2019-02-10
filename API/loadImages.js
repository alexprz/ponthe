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

export function getLatestImagesFromAPI(token, page, page_size) {
  return fetch(API_URL + "get-latest-images", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token  },
    body: JSON.stringify({
      page: page,
      page_size: page_size,
      without_base64: true
    })
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

export function getAllYearsFromAPI(token) {
  return fetch(API_URL + "get-galleries-by-year", {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token},
    body: JSON.stringify({
      without_base64: true
    })
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}


export function getImagesFromAPI(gallery_slug, token) {
  return fetch(API_URL + "get-images/" + gallery_slug, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token  },
    body: JSON.stringify({
      without_base64: true
    })
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

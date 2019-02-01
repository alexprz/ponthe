import { API_URL, API_TOKEN } from '../constants'

function processAPIResponse(response) {
  console.log(response)
  const statusCode = response.status;
  const jsonData = response.json();
  return Promise.all([statusCode, jsonData]).then(res => ({
    statusCode: res[0],
    jsonData: res[1]
  }))
}

export function getLatestImagesFromAPI() {
  return fetch(API_URL + "get-latest-images", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN  }
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

export function getAllYearsFromAPI() {
  return fetch(API_URL + "get-galleries-by-year", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN}
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}


export function getImagesFromAPI(gallery_slug) {
  return fetch(API_URL + "get-images/" + gallery_slug, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN  }
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

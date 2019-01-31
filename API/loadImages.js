import { API_URL } from '../constants'

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
      'Content-Type': 'application/json' }
    })
    .then(processAPIResponse)
    .catch(error => console.error(error))
}

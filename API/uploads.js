import { processAPIResponse } from './commons.js'
import { API_URL } from '../constants.js'

export function uploadImageAsync(uri, token, slug) {
  let apiUrl = API_URL + "file-upload/"+slug;
  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('file', {
    uri: uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  console.log(formData)

  let options = {
    method: 'POST',
    "mimeType": "multipart/form-data",
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },
  };

  return fetch(apiUrl, options).then(processAPIResponse)
  .catch(error => console.error(error));
}

import { processAPIResponse } from './commons.js'
import { API_URL } from '../constants.js'


// export function uploadImage(token, page, page_size) {
//   return fetch(API_URL + "file-upload", {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token  },
//     body: createFormData(this.state.photo, { userId: "123" })
//     })
//     .then(processAPIResponse)
//     .catch(error => console.error(error))
// }

export function uploadImageAsync(uri, token) {
  let apiUrl = API_URL + "file-upload/autre";
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
// export function uploadImage(token, page, page_size) {
//   return fetch(API_URL + "file-upload", {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token  },
//     body: createFormData(this.state.photo, { userId: "123" })
//     })
//     .then(processAPIResponse)
//     .catch(error => console.error(error))
// }

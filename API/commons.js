// Function that takes the response of any API function called
// and gives back a dictionnary with the status code and the data
export function processAPIResponse(response) {
  const statusCode = response.status;
  const jsonData = response.json();
  return Promise.all([statusCode, jsonData]).then(res => ({
    statusCode: res[0],
    jsonData: res[1]
  }))
}

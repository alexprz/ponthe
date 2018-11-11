import { API_URL } from '../constants'

API_TOKEN = "";

export function getToken(email, password) {
    
    return fetch(API_URL + "login", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.token != undefined)
                API_TOKEN = responseJson.token
            return responseJson
        })
        .catch((error) => {
            console.error(error)
        })
}

export default getToken

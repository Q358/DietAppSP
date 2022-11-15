import Constants from "expo-constants"
import hmacsha1 from 'hmacsha1'
// import base64 from 'react-native-base64'
// import axios from "axios"

const API_PATH = 'https://platform.fatsecret.com/rest/server.api'
// const clientId = Constants.manifest.extra.CLIENT_ID
// const clientSecret = Constants.manifest.extra.CLIENT_SECRET
const consumerKey = Constants.manifest.extra.consumerKey
const consumerSecret = Constants.manifest.extra.consumerSecret
const OAUTH_VERSION = '1.0'
const OAUTH_SIGNATURE_METHOD = 'HMAC-SHA1'

function getOauthParameters() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  return [
    ['oauth_consumer_key', consumerKey].join('='),
    ['oauth_nonce', `${timestamp}${Math.floor(Math.random() * 1000000)}`].join('='),
    ['oauth_signature_method', OAUTH_SIGNATURE_METHOD].join('='),
    ['oauth_timestamp', timestamp].join('='),
    ['oauth_version', OAUTH_VERSION].join('='),
  ];
}

// function getOauthParameters() {
//     return [
//       ['client_id', clientId].join('='),
//       ['client_secret', clientSecret].join('='),
//       ['grant_type', "client_credentials"].join('='),
//       ['scope',"premier barcode"].join('='),
//     //   ['oauth_signature_method', OAUTH_SIGNATURE_METHOD].join('='),
//     ]
//   }

function signRequest(queryParams, httpMethod = 'GET') {
  const signatureBaseString = [
    httpMethod,
    encodeURIComponent(API_PATH),
    encodeURIComponent(queryParams.join('&')),
  ].join('&');
  const signatureKey = `${consumerSecret}&`;
  return encodeURIComponent(hmacsha1(signatureKey, signatureBaseString));
}

export async function searchFood(query, maxResults = 8) {
  const method = 'foods.search';
  const queryParams = [
    ...getOauthParameters(),
    ['format', 'json'].join('='),
    ['max_results', maxResults].join('='),
    ['method', method].join('='),
    ['search_expression', encodeURIComponent(query)].join('='),
  ].sort((a, b) => a.localeCompare(b));
  const sha = signRequest(queryParams);
  queryParams.push(['oauth_signature', sha].join('='));
  const response = await fetch(`${API_PATH}?${queryParams.join('&')}`);
  return response.json();
}

export async function getFoodId(barcode) {
  const method = 'food.find_id_for_barcode'
//   await authorize()
  const queryParams = [
    ...getOauthParameters(),
    ['format', 'json'].join('='),
    ['method', method].join('='),
    ['barcode', barcode].join('='),
  ].sort((a, b) => a.localeCompare(b))
  const sha = signRequest(queryParams)
  queryParams.push(['oauth_signature', sha].join('='))
  const response = await fetch(`${API_PATH}?${queryParams.join('&')}`)
  console.log(JSON.stringify(response))
  return response.json()
}

export async function getFoodData(foodId) {
  const method = 'food.get.v2'
//   await authorize()
  const queryParams = [
    ...getOauthParameters(),
    ['format', 'json'].join('='),
    ['method', method].join('='),
    ['food_id', foodId].join('='),
  ].sort((a, b) => a.localeCompare(b))
  const sha = signRequest(queryParams)
  queryParams.push(['oauth_signature', sha].join('='))
  const response = await fetch(`${API_PATH}?${queryParams.join('&')}`)
  console.log(JSON.stringify(response))
  return response.json()
}

export async function getFood(barcode){
  var foodId = await getFoodId(barcode)
  console.log(foodId?.food_id.value)
  return await getFoodData(foodId?.food_id.value)
}


// OpenFoodData API




// async function authorize () {
//     let formData = new FormData()
//     formData.append('grant_type', 'client_credentials')
//     formData.append('user', clientId)
//     formData.append('password', clientSecret)
//     formData.append('scope', 'premier barcode')
// console.log('2.1')
//     return (await fetch('https://oauth.fatsecret.com/connect/token', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: formData
//     })
//     .then((response) => response.json())
//     .then((responseData) => {
//         console.log(responseData)
//     })
//     )
//     console.log("3.1")
// }

// export async function getFood(barcode) {
//     authorize()
//     axios.get("https://platform.fatsecret.com/rest/server.api/",
//       {
//         params:{method:"food.find_id_for_barcode", barcode: barcode}
//       }
//     )
//       .then(function(response){console.log(response.data)})
// }

// export async function getResponse() {
// 	const response = await fetch(
// 		'https://platform.fatsecret.com/rest/server.api' // endpoint url
// 	)
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`) // handle errors
// 	}
// 	const data = await response.json() // response
// }


// var request = require("request")



// function authenticate(barcode){
//     const params = new URLSearchParams({ 'grant_type': 'client_credentials', 'scope' : 'basic' })
// // const params = new URLSearchParams({ 'grant_type': 'client_credentials', 'scope' : 'basic', 'method':'food.find_id_for_barcode','barcode':barcode })
// const authHeader = 'Basic ' + base64.encode(`${clientId}:${clientSecret}`)
// // var options = {
// //    method: 'POST',
// //    url:"https://platform.fatsecret.com/rest/server.api",
// // //    auth : {
// // //       user : clientId,
// // //       password : clientSecret
// // //    },
// //    headers: { 'content-type': 'application/x-www-form-urlencoded','Authorization': authHeader },
// //    data: params,
// //    json: true,
// // }

// var options = {
//     method: 'POST',
//     url: 'https://oauth.fatsecret.com/connect/token',
//     method : 'POST',
//     headers: { 'content-type': 'application/x-www-form-urlencoded','Authorization': authHeader},
//     params: params,
//     json: true
//  };

// console.log("3.5")
// axios.request(options).then(function (response) {
//     console.log(JSON.stringify(response))
//   })
//   .catch(function (error) {
//     console.log(JSON.stringify(error))
//   })
// }

// request(options, function (error, response, body) {
//    if (error) throw new Error(error)

//    console.log(body)
//    return response
// })
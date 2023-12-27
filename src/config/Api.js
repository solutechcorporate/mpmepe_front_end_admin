import axios from 'axios';
import AppConfig from './AppConfig';
import { getData } from './Helper';

axios.defaults.baseURL = AppConfig.apiUrlLocal + '/api';

const token = document.querySelector('[name="csrf-token"]').content

// axios.defaults.headers.common['X-CSRF-TOKEN'] = token

axios.defaults.headers.common['X-CSRF-TOKEN'] = token
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  // axios.defaults.withCredentials = true;
//   axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'X-CSRF-TOKEN': window.csrf_token
// };

axios.interceptors.request.use(async function (config) {
  /** Intercepter du token utilisateur et l'utiliser tant que disponible */
  // await validateToken()
  if (!checkingFreeRoute(config.url)) {
 
    let access_token = await getData("access_token")
    //
// console.log(access_token);
    if (typeof (access_token) === 'string') {
      /** Tester si le token est valide sinon appeler refresh token */
      // const tokenInfos = jwtDecode(access_token)
      // const now = Math.floor(Date.now() / 1000)
      // if (tokenInfos.exp < now) {
      //   await validateToken()
      //   access_token = await getData("access_token")
      // }
      config.headers.Authorization = `Bearer ${access_token}`;
      config.headers['cache-control'] = `no-cache`;
    }
  }

  return config;

}, function (err) {
  console.log('Erreur', err);
});

const checkingFreeRoute = (url) => {
  if (url.includes("noToken")) return true
  return false
}


/**
 *
 * @param {string} resource_url
 * @param {Array} filters
 * @param {number} limit
 */
export const getResource = (resource_url) => {
  
  return axios.get(resource_url, { headers: { 'Accept': 'application/json' } })
}


/**
 *
 * @param {string} resource_url - Url for API
 * @param {object} data - Data
 * @param {object} headers
 */
export const postResource = (resource_url, data) => {
  return axios.post(resource_url, data, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
}

export const postFile = (resource_url, data) => {
  return axios.post(resource_url, data, { headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' } })
}

/**
 *
 * @param {string} resource_url
 * @param {number} id
 * @param {object} data
 * @param {object} headers
 */
export const putResource = (resource_url, id, data) => {
  return axios.put(resource_url + '/' + id, data, { headers: { 'Content-Type': 'application/ld+json', 'Accept': 'application/ld+json' } })
}

export const patchResource = (resource_url, id, data) => {
  return axios.patch(resource_url + '/' + id, data, { headers: { 'Content-Type': 'application/merge-patch+json', 'Accept': 'application/json' } })
}

export const putResourceByUrl = (resource_url, data, headers) => {
  return axios.put(resource_url, data, headers)
}

/**
 *
 * @param {string} resource_url
 * @param {number} id
 */
export const removeResource = (resource_url, id) => {
  return axios.delete(resource_url + '/' + id)
}
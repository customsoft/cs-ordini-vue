import axios from 'axios'
import { globals } from '../main';
import store from '../store';

const headerJson = {
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json"
  }
};


export const funcAxiosGet = async (url) => {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
  axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log('Axios GET error: ' + error.response.status);
    console.log(error.response);
    if (error.response.status >= 401) {
      if (store.state.login == 'loginOk') {
        store.dispatch('setLogout')
      }
      return error.response.data;
    } else {
      return { 'error': Promise.reject(error) };
    }
  });
  const response = await axios.get(globals.$PATH_BASE + url, headerJson);
  console.log(response.data);
  if (typeof response.data !== "undefined" && typeof response.data.loginStatus !== "undefined" && response.data.loginStatus !== null) {
    store.state.login = response.data.loginStatus;
  }
  return response.data;
};

export const funcAxiosPost = async (url, data) => {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
  axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    console.log('Axios POST error: ' + error.response.data)
    if (error.response.status >= 401) {
      store.dispatch('setLogout')
    }
    return { 'error': Promise.reject(error) };
  });
  const response = await axios.post(globals.$PATH_BASE + url, data, headerJson);
  if (typeof response.data !== "undefined" && typeof response.data.loginStatus !== "undefined" && response.data.loginStatus !== null) {
    store.state.login = response.data.loginStatus;
  }
  return response.data;
};

export const funcReadListConfigurations = async () => {
  const response = await funcAxiosGet('api/listConfigurations')
  return response.details;
};

export const funcReadTranslations = async () => {
  const response = await funcAxiosGet('api/translations')
  return response;
};


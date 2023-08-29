//import axios from 'axios'
import Vuex from 'vuex';
import router from '../router';
import { funcAxiosGet } from '../utils/functions.js'

const store = new Vuex.Store({
  state: {
    // other state vars here
    login: 'pending'
  },
  getters: {
    login(state) {
      return state.login;
    }
  },
  mutations: {
    // saveValues
    setLogin(state, status) {
      state.login = status;
    }
  },
  actions: {
    async getLoginStatus() {
      const response = await funcAxiosGet('status');
      console.log('getLoginStatus response: ');
      console.log(response);
      if (typeof response === "undefined" || response.error || response.loginStatus == null) {
        store.state.login = 'loginFailed';
        router.push('login');
      } else if (response.loginStatus == 'waiting') {
        this.state.login = response.loginStatus;
        // router.push({ name: "login" })
      } else if (response.loginStatus == 'loginOk') {
        this.state.login = response.loginStatus
      } else {
        this.state.login = 'loginFailed'
        router.push({ name: "login" })
      }
    },
    async setLogout() {
      if (this.state.login != 'loginFailed') {
        this.state.login = 'loginFailed'
        const response = await funcAxiosGet('api/logout');
        console.log('response: ' + response.loginStatus);
        if (typeof response === "undefined" || response.loginStatus == null) {
          console.log('setLogout response.loginStatus: ');
          console.log(response);
        } else if (response.loginStatus == 'waiting') {
          this.state.login = response.loginStatus;
          // router.push({ name: "login" })
        } else if (response.loginStatus == 'loginOk') {
          this.state.login = response.loginStatus
        } else {
          this.state.login = 'loginFailed'
          router.push({ name: "login" })
        }
      }

    },
  }
});

export default store

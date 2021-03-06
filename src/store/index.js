import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: 'http://127.0.0.1:8000/api/article'
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getBaseUrl: state => {
      return state.baseUrl;
    }
  }
});

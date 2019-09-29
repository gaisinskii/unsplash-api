import Vue from 'vue';
import Vuex from 'vuex';

import { unsplash, toJson } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    totalPages: 59,
    currentPageData: [],
  },
  mutations: {
    TOGGLE_LOADER(state, payload) {
      state.isLoading = payload;
    },
    GET_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },
    GET_CURRENT_PAGE_DATA(state, payload) {
      state.currentPageData = payload;
    },
  },
  actions: {
    async fetchCurrentPage({ commit }, page) {
      commit('TOGGLE_LOADER', true);
      await unsplash.photos
        .listPhotos(page, 10)
        .then(toJson)
        .then((data) => {
          commit('GET_CURRENT_PAGE_DATA', data);
        });
      commit('TOGGLE_LOADER', false);
    },
  },
});

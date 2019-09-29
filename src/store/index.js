import Vue from 'vue';
import Vuex from 'vuex';

import { unsplash, toJson } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPages: 0,
    currentPageData: [],
  },
  mutations: {
    GET_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },
    GET_CURRENT_PAGE_DATA(state, payload) {
      state.currentPageData = payload;
    },
  },
  actions: {
    fetchCurrentPage({ commit }, page) {
      unsplash.photos
        .listPhotos(page, 10)
        .then(toJson)
        .then((data) => {
          commit('GET_CURRENT_PAGE_DATA', data);
        });
    },
    computeTotalPages({ commit }) {
      unsplash.stats
        .total()
        .then(toJson)
        .then((data) => {
          const itemsPerPage = 10;
          console.log(data);
          const totalPages = Math.floor(data.total_photos / itemsPerPage);
          commit('GET_TOTAL_PAGES', totalPages);
        });
    },
  },
});

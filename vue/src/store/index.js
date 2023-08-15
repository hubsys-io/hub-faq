import { createStore } from "vuex"
import axiosClient from "../axios"

const store = createStore({
  state: {
    faq: {
      loading: false,
      data: [],
    }
  },
  getters: {
    faqData: (state) => state.faq.data,
    faqLoading: (state) => state.faq.loading,
  },
  actions: {
    async fetchFaq({ commit }) {
      commit("setLoading", true);
      try {
        const response = await axiosClient.get("/faq");
        commit("setFaq", response.data);
      } catch (error) {
        console.error(error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  mutations: {
    setFaq(state, data) {
      state.faq.data = data;
    },
    setLoading(state, isLoading) {
      state.faq.loading = isLoading;
    },
  },
  modules: {},
})

export default store

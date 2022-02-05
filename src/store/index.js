import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SearchList: [],
    isShow: false,
  },
  mutations: {
    listenShow(state, playLode){
        state.isShow = playLode
    },

    searchState(state, payLode){
      state.SearchList.push(payLode);
    }
  },
  actions: {},
  modules: {},
});

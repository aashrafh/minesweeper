import Vue from "vue";
import Vuex from "vuex";
import grid from "./modules/grid";

Vue.use(Vuex);

const strictMode = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  strict: strictMode,
  modules: {
    grid
  }
});

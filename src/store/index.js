import Vue from "vue";
import Vuex from "vuex";
import game from "./modules/game";
import grid from "./modules/grid";
import timer from "./modules/timer";

Vue.use(Vuex);

const strictMode = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  strict: strictMode,
  modules: {
    game,
    grid,
    timer
  }
});

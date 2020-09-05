const state = {
  hrs: 0,
  mins: 0,
  seconds: 0,
  dividers: {
    day: 1000 * 60 * 60 * 24,
    hrs: 1000 * 60 * 60,
    mins: 1000 * 60,
    seconds: 1000
  },
  stopTime: false,
  initTimer: 0
};

const actions = {
  async setTimer({ dispatch, state }) {
    let time = setInterval(() => {
      if (state.initTimer) {
        const diff = Date.now() - state.initTimer;
        dispatch("interval", diff);
      }
      if (state.stopTime) clearInterval(time);
    }, 1000);
    return time;
  },
  async interval({ dispatch }, diff) {
    const hrs = await dispatch("setHours", diff);
    const mins = await dispatch("setMinutes", diff);
    const seconds = await dispatch("setSeconds", diff);
    return (hrs > 0 ? hrs + ":" : "") + mins + ":" + seconds;
  },
  setHours({ state, commit }, diff) {
    const hrs = Math.floor((diff % state.dividers.day) / state.dividers.hrs);
    commit("setHours", hrs);
    return hrs;
  },
  setMinutes({ state, commit }, diff) {
    const mins = Math.floor((diff % state.dividers.hrs) / state.dividers.mins);
    commit("setMinutes", mins);
    return mins;
  },
  setSeconds({ state, commit }, diff) {
    const seconds = Math.floor(
      (diff % state.dividers.mins) / state.dividers.seconds
    );
    commit("setSeconds", seconds);
    return seconds;
  },
  restartTime({ commit, dispatch }) {
    commit("restartTime");
    dispatch("setTimer");
  }
};

const mutations = {
  setHours(state, hrs) {
    state.hrs = hrs;
  },
  setMinutes(state, mins) {
    state.mins = mins;
  },
  setSeconds(state, seconds) {
    state.seconds = seconds;
  },
  restartTime(state) {
    state.stopTime = false;
    state.initTimer = 0;
    state.hrs = 0;
    state.min = 0;
    state.seconds = 0;
  }
};

const getters = {
  getHours(state) {
    return state.hrs < 1 ? "" : state.hrs + ":";
  },
  getMinutes(state) {
    return (state.mins < 10 ? "0" : "") + state.mins + ":";
  },
  getSeconds(state) {
    return (state.seconds < 10 ? "0" : "") + state.seconds;
  },
  getTime(_, getters) {
    return getters.getHours + getters.getMinutes + getters.getSeconds;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

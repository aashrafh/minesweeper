const state = {
  hrs: 0,
  mins: 0,
  seconds: 0,
  dividers: {
    day: 1000 * 60 * 60 * 24,
    hrs: 1000 * 60 * 60,
    mins: 1000 * 60,
    seconds: 1000
  }
};

const actions = {
  setTimer({ dispatch, rootState }) {
    setInterval(() => {
      if (rootState.grid.initTimer) {
        const diff = Date.now() - rootState.grid.initTimer;
        dispatch("interval", diff);
      }
    }, 1000);
  },
  interval({ dispatch }, diff) {
    dispatch("setHours", diff);
    dispatch("setMinutes", diff);
    dispatch("setSeconds", diff);
  },
  setHours({ state, commit }, diff) {
    const hrs = Math.floor((diff % state.dividers.day) / state.dividers.hrs);
    commit("setHours", hrs);
  },
  setMinutes({ state, commit }, diff) {
    const mins = Math.floor((diff % state.dividers.hrs) / state.dividers.mins);
    commit("setMinutes", mins);
  },
  setSeconds({ state, commit }, diff) {
    const seconds = Math.floor(
      (diff % state.dividers.mins) / state.dividers.seconds
    );
    commit("setSeconds", seconds);
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

const state = {
  cells: [0, 0, 0, 0, "X"],
  pattern: null,
  dim: 8
};

const mutations = {
  setPattern(state, pattern) {
    state.pattern = pattern;
  }
};

const actions = {
  async setPattern({ state, dispatch, commit }) {
    const pattern = [];
    const dim = state.dim;

    for (let row = 0; row < dim; row++) {
      const colPattern = await dispatch("setColPattern", {
        row,
        pattern
      });

      pattern.push(colPattern);
    }

    commit("setPattern", pattern);
  },

  async setColPattern({ state }, { row, pattern }) {
    const dim = state.dim;
    const colPattern = [];

    for (let col = 0; col < dim; col++) {
      const randomIdx = Math.floor(Math.random() * state.cells.length);
      let cell = state.cells[randomIdx];

      let prevCell = colPattern[col - 1];
      if (prevCell) {
        if (typeof cell === "string" && typeof prevCell === "number")
          colPattern[col - 1] = prevCell + 1;
        if (typeof cell === "number" && typeof prevCell === "string") cell += 1;
      }

      if (row > 0) {
        const prevUpperLeft = pattern[row - 1][col - 1];
        const prevUpperMid = pattern[row - 1][col];
        const prevUpperRight = pattern[row - 1][col + 1];

        if (prevUpperLeft) {
          if (typeof cell === "string" && typeof prevUpperLeft === "number")
            pattern[row - 1][col - 1] = prevUpperLeft + 1;

          if (typeof cell === "number" && typeof prevUpperLeft === "string")
            cell += 1;
        }

        if (prevUpperMid) {
          if (typeof cell === "string" && typeof prevUpperMid === "number")
            pattern[row - 1][col] = prevUpperMid + 1;

          if (typeof cell === "number" && typeof prevUpperMid === "string")
            cell += 1;
        }

        if (prevUpperRight) {
          if (typeof cell === "string" && typeof prevUpperRight === "number")
            pattern[row - 1][col + 1] = prevUpperRight + 1;

          if (typeof cell === "number" && typeof prevUpperRight === "string")
            cell += 1;
        }
      }

      colPattern.push(cell);
    }
    return colPattern;
  }
};

const getters = {
  getPattern(state) {
    return state.pattern;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

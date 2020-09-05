<template>
  <v-container>
    <v-row justify="center" align="center">
      <p class="display-1 my-6">Minesweeper</p>
      <v-icon x-large>mdi-bomb</v-icon>
    </v-row>
    <v-row v-for="(row, rowIdx) in pattern" :key="rowIdx" justify="center" no-gutters>
      <template v-for="(col , colIdx) in row">
        <v-hover v-slot:default="{ hover }" :key="colIdx">
          <v-col>
            <v-card
              v-bind:class="[{ 'on-hover': hover }, 'grid-cell', 'flex-center']"
              elevation="6"
              dark
              @click.left.prevent="openCell({row: rowIdx, col: colIdx})"
              @click.right.prevent="flagCell({row: rowIdx, col: colIdx})"
            >
              <v-card-text v-if="col.display">{{col.data}}</v-card-text>
              <v-icon v-else-if="col.flagged">mdi-asterisk</v-icon>
            </v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Grid",
  computed: {
    ...mapGetters({
      pattern: "grid/getPattern"
    })
  },
  methods: {
    ...mapActions({
      setPattern: "grid/setPattern",
      openCell: "grid/openCell",
      flagCell: "grid/flagCell"
    })
  },
  created() {
    this.setPattern();
  }
};
</script>

<style lang="scss" scoped>
.grid-cell {
  height: 2rem;
  width: 2rem;
}
.flag-icon {
  height: 1.5rem;
  widows: 1.5rem;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  flex-grow: 0;
}
.on-hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.01) !important;
}
</style>


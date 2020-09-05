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
              v-bind:class="[{ 'on-hover': hover, 'opened-cell': col.display, 'bomb': col.display && col.bomb && !col.flagged, 'flagged-bomb':  col.display && col.bomb && col.flagged}, 'grid-cell', 'flex-center']"
              elevation="6"
              @click.left.prevent="openCell({row: rowIdx, col: colIdx}), checkWin()"
              @click.right.prevent="flagCell({row: rowIdx, col: colIdx})"
              dark
              outlined
            >
              <div v-if="col.display">
                <v-icon v-if="col.bomb">mdi-bomb</v-icon>
                <v-card-text v-else>{{col.data}}</v-card-text>
              </div>
              <v-icon v-else-if="col.flagged">mdi-asterisk</v-icon>
            </v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
    <v-row v-if="won">
      <game-over message="You Win!" />
    </v-row>
    <v-row v-else-if="lost">
      <game-over message="You Lose!" />
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import GameOver from "./GameOver";

export default {
  name: "Grid",
  components: {
    GameOver
  },
  computed: {
    ...mapGetters({
      pattern: "grid/getPattern",
      won: "game/isWin",
      lost: "game/isLose"
    })
  },
  methods: {
    ...mapActions("grid", ["setPattern", "openCell", "flagCell", "checkWin"])
    // ...mapActions({
    //   setPattern: "grid/setPattern",
    //   openCell: "grid/openCell",
    //   flagCell: "grid/flagCell",
    //   checkWin: "grid/checkWin"
    // })
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

@mixin background-color($bomb: false, $flagged: false) {
  @if $bomb {
    @if $flagged {
      background-color: forestgreen !important;
    } @else {
      background-color: firebrick !important;
    }
  } @else {
    background-color: rgba(255, 255, 255, 0.01) !important;
  }
}
.opened-cell {
  @include background-color($bomb: false, $flagged: false);
  &.bomb {
    @include background-color($bomb: true, $flagged: false);
  }
  &.flagged-bomb {
    @include background-color($bomb: true, $flagged: true);
  }
}
</style>


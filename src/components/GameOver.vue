<template>
  <div>
    <v-row class="centeralized" justify="center">
      <v-card class="text-center">
        <v-card-title class="headline font-weight-bold">{{message}}</v-card-title>
        <v-card-text>Play again?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green lighten-1"
            text
            @click="restartGame(), restartTime(), setPattern()"
          >Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "GameOver",
  props: ["message"],
  computed: {
    ...mapGetters({
      won: "game/isWin",
      gridSize: "grid/getSize"
    })
  },
  methods: {
    ...mapActions({
      restartGame: "game/restartGame",
      restartTime: "timer/restartTime",
      setPattern: "grid/setPattern"
    })
  }
};
</script>

<style lang="scss" scoped>
.centeralized {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
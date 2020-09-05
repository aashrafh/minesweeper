<template>
  <v-container>
    <v-row justify="center" align="center">
      <p>Time</p>
    </v-row>
    <v-row justify="center" align="center">
      <p class="font-weight-bold headline font-color-red">{{time}}</p>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Timer",
  computed: {
    ...mapGetters({
      time: "timer/getTime"
    })
  },
  methods: {
    ...mapActions({
      setTimer: "timer/setTimer"
    })
  },
  created() {
    this.setTimer();
  }
};
</script>

<style>
</style>
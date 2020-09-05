<template>
  <v-container>
    <v-row>
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
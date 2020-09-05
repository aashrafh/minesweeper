<template></template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Timer",
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
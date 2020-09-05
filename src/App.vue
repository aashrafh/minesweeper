<template>
  <v-app>
    <v-content>
      <grid />
    </v-content>
  </v-app>
</template>

<script>
import Grid from "./components/Grid";
import Timer from "./components/Timer";

export default {
  name: "App",

  components: {
    Grid,
    Timer
  },

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  background: #232222;
}
</style>

/**
app background
card theme
on hover card
 */
<template>
  <v-app>
    <v-main>
      <git-hub />
      <grid />
      <timer />
    </v-main>
  </v-app>
</template>

<script>
import Grid from "./components/Grid";
import Timer from "./components/Timer";
import GitHub from "./components/GitHub";

export default {
  name: "App",

  components: {
    Grid,
    Timer,
    GitHub
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
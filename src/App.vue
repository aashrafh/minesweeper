<template>
  <v-app>
    <v-content>
      <grid />
    </v-content>
  </v-app>
</template>

<script>
import Grid from "./components/Grid";

export default {
  name: "App",

  components: {
    Grid
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

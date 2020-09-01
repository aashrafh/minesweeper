<template>
  <v-container>
    <v-row v-for="(row, rowIdx) in 8" :key="rowIdx" justify="center" no-gutters>
      <cell v-for="(col , colIdx) in 8" :key="colIdx"></cell>
    </v-row>
  </v-container>
</template>
<script>
import Cell from "./Cell";
import { mapActions } from "vuex";

export default {
  name: "Grid",
  components: {
    Cell
  },
  methods: {
    ...mapActions({
      setPattern: "grid/setPattern"
    })
  },
  created() {
    this.setPattern();
  }
};
</script>


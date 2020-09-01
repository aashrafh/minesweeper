<template>
  <v-container>
    <v-row v-for="(row, rowIdx) in pattern" :key="rowIdx" justify="center" no-gutters>
      <cell v-for="(col , colIdx) in row" :key="colIdx" v-bind:content="col"></cell>
    </v-row>
  </v-container>
</template>
<script>
import Cell from "./Cell";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Grid",
  components: {
    Cell
  },
  computed: {
    ...mapGetters({
      pattern: "grid/getPattern"
    })
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


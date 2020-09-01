<template>
  <v-container>
    <v-row v-for="(row, rowIdx) in 8" :key="rowIdx" justify="center" no-gutters>
      <template v-for="(col, colIdx) in 8">
        <v-hover v-slot:default="{ hover }" :key="colIdx">
          <v-col>
            <v-card :class="[{ 'on-hover': hover }, 'grid-cell', 'flex-center']" elevation="6" dark></v-card>
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.grid-cell {
  height: 2rem;
  width: 2rem;
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
</style>

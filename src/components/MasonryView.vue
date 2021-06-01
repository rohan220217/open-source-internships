<template>
  <v-row
    v-masonry="`${name}-container-masonry`"
    transition-duration="0.5s"
    item-selector=".item"
  >
    <v-col
      v-masonry-tile
      class="pa-3 item"
      cols="12"
      md="4"
      sm="6"
      v-for="program in data"
      :key="program._id"
    >
      <single-card @toggle="toggleCard" :content="program"></single-card> </v-col
  ></v-row>
</template>
<script>
import SingleCard from "../components/SingleCard";
export default {
  props : {
    data : Array,
    name : String
  },
  components: {
    SingleCard,
  },
  methods : {
    toggleCard(){
      this.$redrawVueMasonry(`${this.name}-container-masonry`)
    }
  },
};
</script>
<style>

</style>
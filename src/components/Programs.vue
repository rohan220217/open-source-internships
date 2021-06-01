<template>
  <div>
    <v-row
      v-masonry="`container-masonry`"
      transition-duration="0.3s"
      item-selector=".item"
    >
      <v-col
        v-masonry-tile
        class="pa-3 item"
        cols="12"
        md="4"
        sm="6"
        v-for="program in allPrograms"
        :key="program._id"
      >
        <single-card :content="program"></single-card> </v-col
    ></v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleCard from "../components/SingleCard";
export default {
  computed: {
    ...mapGetters(["allPrograms"]),
  },
  components: {
    SingleCard,
  },
};
</script>

<style>
</style>
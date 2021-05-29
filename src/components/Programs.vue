<template>
    <v-row>
      <v-col
        class="pa-2"
        cols="12"
        md="4"
        sm="6"
        v-for="program in allPrograms"
        :key="program._id"
      >
        <single-card :content="program"></single-card> </v-col
    ></v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
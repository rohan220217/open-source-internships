<template>
  <v-row>
    <v-col
      class="pa-2"
      cols="12"
      md="4"
      v-for="university in allUniversity"
      :key="university._id"
    >
      <single-card :content="university"></single-card> </v-col
  ></v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleCard from "../components/SingleCard";
export default {
  computed: {
    ...mapGetters(["allUniversity"]),
  },
  components: {
    SingleCard,
  },
};
</script>

<style>
</style>
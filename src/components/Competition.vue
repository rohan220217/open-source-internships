<template>
    <v-row>
      <v-col
        class="pa-3"
        cols="12"
        md="4"
        sm="6"
        v-for="competition in allCompetitions"
        :key="competition._id"
      >
        <single-card :content="competition"></single-card> </v-col
    ></v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleCard from "../components/SingleCard";
export default {
  computed: {
    ...mapGetters(["allCompetitions"]),
  },
  components: {
    SingleCard,
  },
};
</script>

<style>
</style>
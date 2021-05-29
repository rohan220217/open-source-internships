<template>
  <v-container>
    <v-card flat>
      <v-card-title class="text-center justify-center py-6">
        <v-img
          height="80"
          width="0"
          contain
          :src="require('@/assets/logo2.gif')"
        ></v-img>
        <!-- <h1 class="font-weight-bold display-1 basil--text">
          Open-Source-Internships
        </h1> -->
      </v-card-title>

      <v-tabs
        show-arrows
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-card>
    <div class="mt-3">
      <v-tabs-items v-model="tab" class="pa-4">
        <v-tab-item v-for="item in items" :key="item">
          <v-row>
            <v-col
              class="pa-2"
              cols="12"
              md="4"
              v-for="item in texts"
              :key="item"
            >
              <single-card :content="item"></single-card> </v-col
          ></v-row>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import SingleCard from "../components/SingleCard";

export default {
  name: "Home",

  components: {
    SingleCard,
  },
  data() {
    return {
      tab: null,
      show: false,
      items: ["Programs", "Competitions", "University SoC/WoC"],
      texts: [
        "losdfffffffffffffffffffffffffffff",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "fdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
    };
  },
};
</script>
<style scoped>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
.v-tabs-items {
  background-color: transparent !important;
}
</style>

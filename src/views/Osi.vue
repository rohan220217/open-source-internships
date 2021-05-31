<template>
  <div>
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
          color="orange lighten-1"
          grow
        >
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-card>
      <div class="mt-3">
        <v-tabs-items v-model="tab" class="py-4">
          <v-tab-item>
            <Programs />
          </v-tab-item>
          <v-tab-item>
            <Competition />
          </v-tab-item>
          <v-tab-item>
            <University />
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab" class="pa-4"> </v-tabs-items>
        <v-tabs-items v-model="tab" class="pa-4"> </v-tabs-items>
      </div>
    </v-container>
    <v-tooltip left>
      <template #activator="{ on: tooltip }">
        <v-btn
          v-on="{ ...tooltip }"
          absolute
          dark
          fixed
          fab
          bottom
          right
          color="purple"
          style="bottom: 55px"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark;"
        >
          <v-icon>{{
            $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-weather-night"
          }}</v-icon>
        </v-btn>
      </template>
      <span>Day/ Night Mode</span>
    </v-tooltip>
  </div>
</template>

<script>
import Programs from "../components/Programs";
import University from "../components/University";
import Competition from "../components/Competition";

export default {
  name: "Home",

  components: {
    Competition,
    University,
    Programs,
  },
  data() {
    return {
      tab: null,
      show: false,
      items: ["Programs", "Competitions", "Universities"],
    };
  },
};
</script>
<style scoped>
.v-tabs-items {
  background-color: transparent !important;
}
</style>

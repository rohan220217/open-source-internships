<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
  },
};
</script>

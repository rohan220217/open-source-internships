<template>
  <v-card>
    <v-img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png"
      lazy-src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png"
      height="100px"
      contain
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>

    <v-card-title> Google Summer of Code </v-card-title>

    <v-card-subtitle class="pb-0"> Begins on - 31 July 2021 </v-card-subtitle>
    <v-card-subtitle class="pt-0"> Ends on - 31 July 2021 </v-card-subtitle>
    <v-card-subtitle class="py-0 px-2">
      <v-chip small class="ma-2" color="deep-purple accent-4" outlined>
        <v-icon x-small left> mdi-wrench </v-icon>
        Swags
      </v-chip>
      <v-chip small class="ma-2" color="deep-purple accent-4" outlined>
        <v-icon x-small left> mdi-wrench </v-icon>
        Swags
      </v-chip>
      <v-chip small class="ma-2" color="deep-purple accent-4" outlined>
        <v-icon x-small left> mdi-wrench </v-icon>
        Swags
      </v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Timeline </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ content }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "Empty",
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>
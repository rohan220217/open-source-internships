<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 8 : 0"
      :color="content.color"
      class="pa-2"
      light
    >
      <v-img
        @click="openLink(content.link)"
        :src="content.image"
        :lazy-src="content.image"
        height="100px"
        contain
        style="cursor: pointer"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>

      <v-card-title> {{ content.title }} </v-card-title>

      <v-card-subtitle class="pb-0">
        Begins on - {{ content.start_date }}
      </v-card-subtitle>
      <v-card-subtitle class="pt-0">
        Ends on - {{ content.end_date }}
      </v-card-subtitle>
      <v-card-subtitle class="py-0 px-2">
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.swags"
        >
          🤩 Swags
        </v-chip>
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.stipend"
        >
          💸 Stipend
        </v-chip>
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.cash_price"
        >
          💰 Cash Price
        </v-chip>
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.internships_opportunity"
        >
          😎 Internships
        </v-chip>
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.certificates"
        >
          📜 Certificate
        </v-chip>
        <v-chip
          small
          class="ma-1"
          color="deep-purple accent-4"
          outlined
          v-if="content.perks.surprise_gifts"
        >
          🎁 Surprise gift
        </v-chip>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange" text @click="openLink(content.timeline)">
          Timeline
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="text-justify">
            {{ content.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },

  },
};
</script>

<style>
</style>
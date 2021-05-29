<template>
  <div>
    <!-- <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-btn
          class="hidden-md-and-down"
          v-for="link in links"
          :key="link"
          text
          @click="$vuetify.goTo('#contact')"
        >
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar> -->
    <!-- <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in links" :key="item" link>

          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-bottom-navigation color="indigo" v-model="value" app grow height="50">
      <v-btn value="1" x-large text @click="$router.push('/osi')">
        🐱‍💻 OSI"
      </v-btn>

      <v-btn value="1" @click="$router.push('/about')" x-large text>
        😁 About
      </v-btn>

      <v-btn
        value="1"
        href="https://github.com/rohan220217/Open-Source-Internships"
        x-large
        text
      >
        ⭐ This project
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: ["🐱‍💻 OSI", "😁 About", "⭐ This project"],
    value: 1,
  }),
};
</script>

<style>
</style>
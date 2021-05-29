<template>
  <v-container>
    <v-card flat :dark="isDark == 'dark'">
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
    </v-card>
    <v-card flat class="mt-3 text-center" :dark="isDark == 'dark'">
      <v-card-text>
        <p class="headline" style="color: #3f51b5">About</p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          numquam magni consectetur reiciendis sunt deserunt ea voluptatem,
          totam similique porro cumque, non incidunt commodi, aspernatur in quam
          rem excepturi. Eligendi.
        </div>
      </v-card-text>
    </v-card>
    <v-card flat class="mt-3 text-center" :dark="isDark == 'dark'">
      <v-card-text>
        <p class="headline" style="color: #3f51b5">Contact</p>
        <div>
          If you face any error or you have any query feel free to contact me 🤗
        </div>
        <div class="text-center mt-2">
          <v-chip
            class="ma-2"
            color="#0077b5"
            text-color="white"
            small
            href="https://www.linkedin.com/in/rohan-kumar-a65a87175/"
          >
            <v-avatar left>
              <v-icon small>mdi-linkedin</v-icon>
            </v-avatar>
            Linkedin
          </v-chip>
          <v-chip
            class="ma-2"
            color="black"
            text-color="white"
            small
            href="https://github.com/rohan220217"
          >
            <v-avatar left>
              <v-icon small>mdi-github</v-icon>
            </v-avatar>
            Github
          </v-chip>
          <v-chip
            class="ma-2"
            color="#D44638"
            text-color="white"
            small
            href="mailto:rk220217@gmail.com"
          >
            <v-avatar left>
              <v-icon small>mdi-gmail</v-icon>
            </v-avatar>
            Gmail
          </v-chip>
          <v-chip
            class="ma-2"
            color="#0088cc"
            text-color="white"
            small
            href="https://t.me/rk220217"
          >
            <v-avatar left>
              <v-icon small>mdi-telegram</v-icon>
            </v-avatar>
            Telegram
          </v-chip>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isDark"]),
  },
};
</script>
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
    </v-card>
    <v-card flat class="mt-3 text-center">
      <v-card-text>
        <p class="headline" style="color: #3f51b5">About</p>
        <div>
        
          For all the Computer science students out there, it is a strenuous task to look for open source internships, 
          different types of coding competitions happening around the year.<\br>
          OSI is an idea to help the student community by providing them all kind of open-source opportunities for them 
          at one place. Students no longer have to waste precious hours searching for them since we are here.<\br>
          OSI is an open-source project, all the students out there can contribute by putting in internships which in case
          we have missed.<\br>
          It is a project of students, by students, for students.😉

        </div>
      </v-card-text>
    </v-card>
    <v-card flat class="mt-3 text-center">
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
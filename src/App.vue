<template>
  <v-app>
    <v-main>
      <div
        :style="[
          $vuetify.theme.dark
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'white' },
        ]"
      >
        <div id="particles-js"></div>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </div>
    </v-main>
    <app-bar></app-bar>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import "particles.js";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: "#4ebeef",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#85e598",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#85e598",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>
<style>
#studentQuiz {
  min-height: 100vh;
  height: 100%;

  /* background: #FFF2CC;  */
  /* background: -webkit-linear-gradient(
    to right,
    #FFF2CC,
    #FCFFE9
  );
  background: linear-gradient(
    to right,
    #FFF2CC,
    #FCFFE9
  );  */
}
#particles-js {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
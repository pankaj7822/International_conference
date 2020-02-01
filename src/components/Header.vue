<template>
  <v-container fluid class="primary">
    <v-row justify="center" align="center">
      <v-col cols="4" v-for="(logo, i) in logos" :key="i">
        <v-img :src="logo.src" width="100" contain> </v-img>
      </v-col>
      <v-col cols="12" md="6" class="white--text">
        <div class="display-2 font-weight-thin">{{ title }}</div>
        <div class="display-1 font-weight-light">{{ description }}</div>
        <div class="white--text title font-weight">
          <v-icon color="white">mdi-calendar</v-icon>
          {{ date }} - {{ venue }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <Carousel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  data() {
    return {
      title: "THE INTERNATIONAL CONFERENCE ON BEYOND FOSSIL FUELS",
      description: "The Future of Alternative Energy Technologies",
      date: "19-21 March, 2020",
      venue: "IIT(BHU) Varanasi",
      logos: [
        {
          src: require("@/assets/logos/iitbhu.png")
        },
        {
          src: require("@/assets/logos/essi.png")
        },
        {
          src: require("@/assets/logos/srm.png")
        },
      ]
    };
  },
  components: {
    Carousel
  }
};
</script>

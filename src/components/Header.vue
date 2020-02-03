<template>
  <v-container fluid class="primary">
    <v-row justify="center"  class="mx-auto">
      <v-col cols="12" md="6" class="white--text">
        <v-row class="mx-0 my-0">
          <v-col cols="4" v-for="(img, i) in image" :key="i">
            <v-img :src="img.src" min-width="630" class="ma-0 pa-0" contain> </v-img>
          </v-col>
        </v-row>
        <div class="display-2 font-weight-thin my-3">{{ title }}</div>
        <div class="display-1 font-weight-light my-3">{{ description }}</div>
        <div class="white--text title font-weight">
          <v-icon color="white">mdi-calendar</v-icon>
          {{ date }} - {{ venue }}
        </div>
        <div class="display-1 my-6" v-if="days">{{ days }} DAYS TO GO</div>
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
      now: Math.trunc(new Date().getTime() / 1000),
      date: "19-21 March, 2020",
      venue: "IIT(BHU) Varanasi",
      image: [
        {
          src: require("@/assets/images/association.png")
        },
      ]
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse("03/19/2020") / 1000);
    },
    days() {
      return Math.max(
        Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24),
        0
      );
    }
  },
  components: {
    Carousel
  }
};
</script>

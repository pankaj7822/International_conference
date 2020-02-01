<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="mx-auto">
    <v-timeline-item
      v-for="(item, i) in items"
      color="primary"
      fill-dot
      :key="i"
    >
      <span slot="opposite">{{ item.date }}</span>
      <v-card max-width="600" class="mx-auto">
        <v-card-title class="primary">
          <h2 class="display-1 white--text font-weight-light">
            {{ item.title }}
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down text-right" cols="12">
              <v-img :src="item.src" width="400" contain />
            </v-col>
            <v-col cols="12" class="px-4">
              {{ item.description }}
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Ganga Aarti",
          description:
            "The Ganga aarti of Varanasi is a shining beacon of devotion and bliss that makes us experience the divinity in and around us. Since ages, no day has gone by when the holy Ganga River has not been adored. It is one of the must-see activities included in every traveller’s itinerary, and people from all walks of life visit the city with the desire of beholding the Ganga aarti.",
          date: "19 March 2020",
          src: require("@/assets/images/carousel/poster.jpg")
        },
        {
          title: "Sarnath",
          description:
            "Sarnath is a place located 10 kilometres north-east of Varanasi city near the confluence of the Ganges and the Varuna rivers in Uttar Pradesh, India. The deer park in Sarnath is where Gautama Buddha first taught the Dharma, and where the Buddhist Sangha came into existence through the enlightenment of Kondanna.",
          date: "20 March 2020",
          src: require("@/assets/images/carousel/iitbhu.png")
        },
        {
          title: "Subah-E-Banaras",
          description:
            "Subah-e-Banaras, an early morning collective effort before dawn (sunrise) rather a phenomenon started on 24th Nov, 2014 by Hon. Minister of State,U.P. Govt. With a pious concept, an initiative taken by Shri Pranjal Yadav, DM, Varanasi and Dr. Ratnesh Verma, Chief, Regional Cultural Center, Varanasi was strengthened by Shri Vishak G, Chief Development Officer, Varanasi. Thus they became founders of Subah-e-Banaras. Later a committee has been constituted to glorify and propagate the celestial moments of Subah-e-Banaras for spiritual development. People from all walks of life joined hands together to perpetuate the early hour's effort to feel within existence of Almighty and grandeur of Nature.",
          date: "21 March 2020",
          src: require("@/assets/images/carousel/ghat.jpg")
        }
      ]
    };
  }
};
</script>

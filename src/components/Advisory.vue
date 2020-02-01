<template>
<v-container fluid class="secondary">
    <v-card-text class="primary--text text-center headline">Advisory Board</v-card-text>
  <v-carousel hide-delimiters hide-delimiter-background dark class="pa-0 ma-0">
    <v-carousel-item
      class="pa-0 ma-0"
      v-for="(item, i) in items"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row justify="space-around">
        <v-col v-for="member in item" :key="member" cols="12" sm="12" md="4" lg="4">
          <v-img :src="member.src" class="secondary" height="300" contain> </v-img>
          <v-card-text class="white--text text-center">{{ member.name }}<br />{{ member.college }}</v-card-text>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        [
          {
            name: "Prof. A Manthiram",
            college: "The University of Texas(UT) Austin, USA",
            src: require("@/assets/images/advisory/1/Manthiram.jpg")
          },
          {
            name: "Prof. Stefen Adams",
            college: "National University of Singapore(NUS), Singapore",
            src: require("@/assets/images/advisory/1/stefenadams.jpg")
          },
          {
            name: "Prof. Stephen Skinner",
            college: "Imperial College London",
            src: require("@/assets/images/advisory/1/stephenskinner.jpg")
          }
        ],
        [
          {
            name: "Dr. Parans Paranthaman",
            college: "Oak Ridge National Laboratory(ORNL), USA",
            src: require("@/assets/images/advisory/2/dr.parans33.jpg")
          },
          {
            name: "Prof. Ramaswamy Murugan",
            college: "Pondicherry University, India",
            src: require("@/assets/images/advisory/2/Murugan43.jpg")
          },
          {
            name: "Prof. O.N. Srivastava",
            college: "Banaras Hindu University, India",
            src: require("@/assets/images/advisory/2/profshrivastava41.jpg")
          }
        ],
        [
          {
            name: "Prof. Donald Siegel",
            college: "University of Michigan, USA",
            src: require("@/assets/images/advisory/3/DONALD23.jpeg")
          },
          {
            name: "Prof. Jinwoo Lee",
            college: "KAIST, South Korea",
            src: require("@/assets/images/advisory/3/jinwoolee.jpg")
          },
          {
            name: "Dr. Julian Schwenzel",
            college:
              "Fraunhofer Institute for Manufacturing Technology and Advanced Materials(IFAM), Germany",
            src: require("@/assets/images/advisory/3/Julian31.jpg")
          }
        ],
        [
          {
            name: "Prof. Aninda J.Bhattacharyya",
            college: "IISc Bangalore",
            src: require("@/assets/images/advisory/4/Aninda21.jpg")
          },
          {
            name: "Prof. Dhananjai Pandey",
            college: "IIT (BHU), Varanasi",
            src: require("@/assets/images/advisory/4/Dhananjai22.jpg")
          },
          {
            name: "Dr. Jagjit Nanda ",
            college: "Oak Ridge National Laboratory(ORNL), USA",
            src: require("@/assets/images/advisory/4/jagjitnanda.png")
          }
        ]
      ]
    };
  }
};
</script>

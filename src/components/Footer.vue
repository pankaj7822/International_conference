<template>
  <v-footer app absolute dark padless class="primary">
    <v-container>
      <v-row justify="space-around" class="mt-5">
        <v-col
          cols="12"
          sm="12"
          md="3"
          lg="3"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card class="primary" elevation="0">
            <v-img
              class="pa-0 mx-auto"
              :src="item.image_src"
              height="150"
              width="150"
              style="border-radius:100%;"
              contain
            ></v-img>
            <v-card-text class="primary text-center subtitle-1"
              >{{ item.event_post }}<br />{{ item.name }}<br />{{ item.post
              }}<br /><span v-if="item.department">{{ item.department }}</span
              ><br />{{ item.college }}</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class="text-center title font-weight-light">
          Contact<br />
          Email: {{ email }}<br />
          Phone: {{ phone }}
        </v-card-text>
      </v-row>
      <v-row>
        <v-card-title class="mx-auto">
          Get connected with us on social networks
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-facebook-box",
      "mdi-twitter-box",
      "mdi-linkedin-box",
      "mdi-instagram"
    ],
    email: "bfat2020.iitbhu@gmail.com",
    phone: "+91-9670365598",
    items: [
      {
        event_post: "Convener",
        name: "Dr. Preetam Singh",
        post: "Assistant Professor",
        department: "Department of Ceramic Engineering",
        college: "IIT(BHU), Varanasi",
        image_src: require("@/assets/images/Footer/preetam.png")
      },
      {
        event_post: "Co-Convener",
        name: "Dr. T. Maiyalagan",
        post: "Professor and Head",
        department: "Department of Chemistry",
        college: "SRM Institute of Science and Technology",
        image_src: require("@/assets/images/Footer/maligan.jpg")
      },
      {
        event_post: "Co-Chairman",
        name: "Prof. Vinary Kumar Singh",
        post: "Professor",
        department: "Department of Ceramic Engineering",
        college: "IIT(BHU), Varanasi",
        image_src: require("@/assets/images/Footer/vinay.jpg")
      },
      {
        event_post: "Chairman",
        name: "Prof. Rajiv Prakash",
        post: "Professor & Dean(R&D)",
        department: "",
        college: "IIT(BHU), Varanasi",
        image_src: require("@/assets/images/Footer/rajiv.jpg")
      }
    ]
  })
};
</script>

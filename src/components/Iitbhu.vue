<template>
  <v-card max-width="1000" class="text-justify pa-3 mx-auto">
    <v-container>
      <v-card-title>About IIT BHU</v-card-title>
      <v-row justify="space-around">
        <v-col cols="12" md="4">
          <v-img :src="src"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-text>{{ message }}</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      message:
        "Indian Institute of Technology (BHU) Varanasi (abbreviated IIT (BHU) Varanasi or simply IIT BHU) is a public engineering institution located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968. It was designated an Indian Institute of Technology in 2012. IIT (BHU) Varanasi has 14 departments and 3 inter-disciplinary schools.",
      src: require("@/assets/images/IITBHU.jpg")
    };
  }
};
</script>

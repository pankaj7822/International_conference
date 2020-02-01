<template>
  <v-container>
    <v-card width="500" class="text-justify pa-3">
      <v-card-title>About IIT BHU</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      message:
        "Indian Institute of Technology (BHU) Varanasi (abbreviated IIT (BHU) Varanasi or simply IIT BHU) is a public engineering institution located in Varanasi, Uttar Pradesh, India. Founded in 1919 as the Banaras Engineering College, it became the Institute of Technology, Banaras Hindu University in 1968. It was designated an Indian Institute of Technology in 2012. IIT (BHU) Varanasi has 14 departments and 3 inter-disciplinary schools."
    };
  }
};
</script>

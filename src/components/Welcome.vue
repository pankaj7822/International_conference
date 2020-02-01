<template>
  <v-container>
<v-card elevation="3" max-width="1000">
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-img style="border-radius:100%;" :src="guest" height="400" width="400"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card-title class="text-justify pa-3">Welcome Message</v-card-title>
          <v-card-text class="text-justify pa-3">{{ message }}</v-card-text>
        </v-col>
        <v-col cols="12"  sm="12" md="4" lg="4">
          <v-img :src="nobel" style="border-radius:100%;" height="300" width="300"></v-img>
        </v-col>
      </v-row>
</v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      guest: require("@/assets/images/welcome/goodenough.png"),
      nobel: require("@/assets/images/welcome/Nobel_Prize.png"),
      message:
        "The aim of the conference is to celebrate the recognition of Li-ion battery technology and pay tribute to the (living legend and battery pioneer Prof. John B. Goodenough (Nobel Prize in Chemistry 2019 The conference is themed on the emergence of hydrogen economy in the arena of post fossil fuel technologies and emerging zero emission technologies      especially for automobile industries. Filling the gap between fuel cells and rechargeable atteries technologies to overcome the challenges imposed by existing fossil fuel based technologies are the main agendas of the conference"
    };
  }
};
</script>

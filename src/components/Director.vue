<template>
  <v-card max-width="1000" class="text-justify pa-3 mx-auto">
    <v-container>
      <v-card-title>Message From Patron</v-card-title>
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
        "I welcome you all to the international conference entitled beyond fossil fuel: the future of alternative technology (BFFAT-2020). This conference is in context with the development of alternative energy technologies and new energy challenges imposed by portable electronic revolution coupled with the development of rechargeable lithium batteries. The conference is going to provide a unique opportunity for the scientist gathering from various part of the world to make a sincere effort towards the development of zero-emission technologies: a high point agenda of our government and also for the world. I hope the conference witnessed a successful gathering and provide an opportunity to exchange knowledge vision and motivation for the development of efficient renewal technologies that can provide a better future for the world.",
      src: require("@/assets/images/director.jpeg")
    };
  }
};
</script>

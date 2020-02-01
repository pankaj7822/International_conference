<template>
  <v-tabs background-color="secondary" center-active dark>
    <v-tab v-for="(tab,i) in tabs" :key="i">{{tab}}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        "Home",
        "Registration",
        "Abstract Submission",
        "Program",
        "Speakers",
        "Organizing Committee",
        "Venue",
        "Excursion",
        "Contact"
      ]
    };
  }
};
</script>

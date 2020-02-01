<template>
  <v-tabs background-color="primary" center-active dark>
    <v-tab v-for="(tab, i) in tabs" :key="i" @click="$router.push(tab.link)">
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "Home", link: "/" },
        { name: "Registration", link: "/registration" },
        { name: "Abstract Submission", link: "/abstract" },
        { name: "Programs", link: "/programs" },
        { name: "Speakers", link: "/speakers" },
        { name: "Organizing Committee", link: "/organizing" },
        { name: "Venue", link: "/venue" },
        { name: "Excursion", link: "/excursion" },
      ]
    };
  }
};
</script>

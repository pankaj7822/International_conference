<template>
  <v-app>
    <v-content app>
      <Navbar />
      <Header />
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    Header,
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

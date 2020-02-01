<template>
  <v-app>
    <v-content>
      <Header/>
      <Navbar/>
      <Carousel/>
      <router-view/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',

  components: {
    Carousel,
    Header,
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

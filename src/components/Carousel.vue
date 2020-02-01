<template>
  <v-carousel hide-delimiters hide-delimiter-background dark>
    <v-carousel-item class="pa-0 ma-0"
      v-for="(item, i) in items"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"

    >
      <v-img :src="item.src" class="primary" height="500" contain> </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/carousel/poster.jpg")
        },
        {
          src: require("@/assets/images/carousel/iitbhu.png")
        },
        {
          src: require("@/assets/images/carousel/ghat.jpg")
        },
        {
          src: require("@/assets/images/carousel/sarnath.jpg")
        },
        {
          src: require("@/assets/images/carousel/iitbhuticket.png")
        },
      ]
    };
  }
};
</script>

<template>
  <v-container>
    <v-card max-width="1000" class="text-justify pa-3 mx-auto">
      <v-container>
        <v-card-title>About Varanasi</v-card-title>
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
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      message:
        "Varanasi is a city in the northern India state of Uttar Pradesh and regarded as the spiritual capital of India. The city is sacred to Hindus and Jains and also one of the oldest continuously inhabited cities in the world, with settlements dating back to the 11th century BC. Sarnath, a place located 10 kilometers north-east of Varanasi where Gautam Buddha first taught the dhamma, and where the Buddhist sangha came into existence through the enlightenment of Kondanna.",
      src: require("@/assets/images/Varanasi.png")
    };
  }
};
</script>

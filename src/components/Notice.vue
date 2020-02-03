<template>
  <v-container>
    <v-card elevation="3" max-width="500" class="pa-2 ma-auto">
      <v-card-title class="text-justify pa-3">Important Notice</v-card-title>
      <v-card-text class="body-1 text-justify pa-3">
        <ol>
          <li v-for="(item, i) in items" :key="i">{{ item }}</li>
        </ol>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "Selected Excellent abstracts will be given discount in registration fees",
        "Conference proceedings will be published in Elsevier"
      ]
    };
  }
};
</script>

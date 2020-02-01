<template>
  <v-container class="pa-3">
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <Dates />
      </v-col>
      <v-col cols="12" md="8">
        <Topics />
        <v-btn class="primary my-5 mr-3" href="/abstract.pdf"
          >Download Abstract Template</v-btn
        >
        <v-btn class="primary my-5 mr-3">Submit Your Abstract</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Dates from "@/components/Dates.vue";
import Topics from "@/components/Topics.vue";

export default {
  components: {
    Dates,
    Topics
  }
};
</script>

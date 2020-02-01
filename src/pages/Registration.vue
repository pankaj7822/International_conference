<template>
  <v-container class="pa-3">
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <Dates />
      </v-col>
      <v-col cols="12" md="8">
        <Topics />
        <br>
        <Fees/>
        <v-btn class="primary my-5 mr-3">Register As Participant</v-btn>  
        <v-btn  class="primary my-5">Register As Audience</v-btn>
      </v-col>
   
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Dates from "@/components/Dates.vue";
import Topics from "@/components/Topics.vue";
import Fees from "@/components/Fees.vue";


export default {
  components: {
    Dates,
    Topics,
    Fees
  }
};
</script>

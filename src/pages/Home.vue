<template>
  <v-container class="pa-3">
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <Notice />
        <Dates />
      </v-col>
      <v-col cols="12" md="8">
        <Welcome />
        <Iitbhu />
        <Varanasi />
        <Director />
      </v-col>
    </v-row>
    <Advisory />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Dates from "@/components/Dates.vue";
import Welcome from "@/components/Welcome.vue";
import Iitbhu from "@/components/Iitbhu.vue";
import Varanasi from "@/components/Varanasi.vue";
import Advisory from "@/components/Advisory.vue";
import Notice from "@/components/Notice.vue";
import Director from "@/components/Director.vue";

export default {
  components: {
    Dates,
    Welcome,
    Iitbhu,
    Varanasi,
    Advisory,
    Notice,
    Director
  }
};
</script>

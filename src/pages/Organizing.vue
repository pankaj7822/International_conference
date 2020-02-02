<template>
  <v-container class="pa-3">
    <v-row justify="space-around">
      <v-col cols="12" md="6">
        <Committee />
      </v-col>
      <v-col cols="12" md="6">
        <Team />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Committee from "@/components/Committee.vue";
import Team from "@/components/Team.vue";

export default {
  components: {
    Committee,
    Team
  }
};
</script>

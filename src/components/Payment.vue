<template>
  <v-card elevation="3" max-width="1000" class="my-3">
    <v-card-title class="text-justify pa-3">Account Information</v-card-title>
    <v-card-text
      class="text-justify black--text pa-3"
      v-html="message"
    ></v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      message:
        "Name of the Account: IIT(BHU)-Main account (Institute Development Fund)<br/>Account Holder Name: Registrar, IIT(BHU)<br/>Bank Name: State Bank of India<br/>Branch: IT BHU<br/>A/C number: 32778803937<br/>Account type: Current<br/>IFSC code: SBIN0011445"
    };
  }
};
</script>

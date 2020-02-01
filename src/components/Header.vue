<template>
  <p class="headline secondary blockquote font-weight-bold primary--text pa-2 ma-0">
    {{ title }}<br />
    {{ description }}
    <v-subheader class="white--text">{{ date }} - {{ venue }}</v-subheader>
  </p>
</template>

<script>
export default {
  data() {
    return {
      title: "THE INTERNATIONAL CONFERENCE ON Beyond Fossil Fuels",
      description: "The Future of Alternative Energy Technologies",
      date: "19-21 March, 2020",
      venue: "IIT(BHU) Varanasi"
    };
  }
};
</script>

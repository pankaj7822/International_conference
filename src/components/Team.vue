<template>
  <v-card width="1000">
    <v-simple-table light>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="primary white--text text-center">TECHNICAL TEAM</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(member, i) in members" :key="i">
            <td v-html="member" class="pa-2" />
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      members: [
        "Pankaj Kumar Jha<br/>IDD, Computer Science and Engineering<br/>IIT (BHU), Varanasi",
        "Piyush Kumar Maurya<br/>Btech, Computer Science and Engineering<br/>IIT (BHU), Varanasi",
        "Mahatim Singh<br/>PhD, Computer Science<br/>BHU, Varanasi",
        "Neeraj Kr. Mishra<br/>PhD, Ceramic Engineering<br/>IIT (BHU), Varanasi",
        "Neeraj Singh<br/>PhD, Ceramic Engineering<br/>IIT (BHU), Varanasi"
      ]
    };
  }
};
</script>

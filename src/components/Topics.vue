<template>
<v-card width="500">
  <v-simple-table light >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="secondary white--text text-justify">Topics</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-justify" v-for="topic in topics" :key="topic">
          <td>{{ topic }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        topics:["Hydrogen Economy(Production, Storage, and Utility)",
"Rechargeable Li-ion/Na-ion Battery",
"All Solid State Batteries",
"Fuel Cells",
"Non Conventional Renewable Energy Technologies"]
      }
    },
  }
</script>

<template>
<v-card width="1000">
  <v-simple-table light >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="primary white--text text-center">ORGANIZING COMMITTEE</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="(member,i) in committee" :key="i">
          <td>{{ member }}</td>
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
        committee:["Prof. Rajiv Prakash<br/> Department of ceramic engineering<br/> IIT (BHU), Varanasi<br/> Chairman",
"Prof. Vinay Kumar Singh<br/> Department of ceramic engineering<br/> IIT (BHU), Varanasi<br/> Co-Chairman",
"Dr. Preetam Singh<br/> Ceramic Engineering<br/> IIT (BHU), Varanasi<br/> Convener",
"Dr. T. Mailagan<br/> Department of Chemistry<br/> SRM University<br/> Co-Convener",
"Prof. Ram Pyare<br/> Ceramic Engineering<br/> IIT (BHU), Varanasi<br/> Treasurer",
"Dr. A. S. Prakash<br/> CECRI, Chennai",
"Dr. PK Roy<br/> Department of ceramic engineering<br/> IIT (BHU), Varanasi",
"Dr. Asha Gupta<br/> Department of Chemistry<br/> IIT (BHU), Varanasi",
"Dr. Anil Kumar<br/> Department of ceramic engineering<br/> IIT (BHU), Varanasi",
"Prof. K. Ramesha<br/> Secretary-ESSI<br/> CECRI, Chennai",
"Prof. Ramaswamy Murugan<br/> President-ESSI<br/> Pondicherry University",
"Prof. S. K. Shukla<br/> Mechanical Engineering<br/> IIT (BHU), Varanasi"]
      }
    },
  }
</script>

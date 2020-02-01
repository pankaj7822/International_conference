<template>
  <v-card width="1000">
    <v-simple-table light>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="primary white--text text-center">CATEGORY</th>
            <th class="primary white--text text-center">FEES</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="fee in fees" :key="fee">
            <td style="width:30%;">{{ fee.name }}</td>
            <td>{{ fee.amount }}</td>
          </tr>
        </tbody>
        <br>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      fees: [
        {
          name: "Student",
          amount:
            "₹ 4000/- (ESSI Member ₹ 3000/-, IIT BHU and BHU Students ₹ 3500/) Other charges (Accomodation + Excursion) ₹ 3000/-"
        },
        { name: "Faculty", amount: "₹ 10000/- (ESSI Member ₹ 9000/-)" },
        { name: "Industry Delegates", amount: "₹ 25,000/-" },
        { name: "International Student", amount: "US $500" },
        { name: "International Faculty", amount: "US $1000" },

      ]
    };
  }
};
</script>

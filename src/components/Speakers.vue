<template>
<v-card width="1000">
  <v-simple-table light >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="primary white--text text-center">SPEAKERS </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="(speaker,i) in speakers" :key="i">
          <td>{{ speaker }}</td>
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
        speakers:["Prof. John B. Goodenough<br/>The University of Texas at Austin, USA",
"Dr. Eric D Wachsman<br/>Director of the University of Maryland Energy Research Center, USA",
"Prof. Donald Siegel<br/>University of Michigan, USA",
"Dr. M. Parans Paranthaman<br/>Oak Ridge National Laboratory (ORNL), USA",
"Dr. Vijayamohanan K Pillai<br/>Director, CSIR-CECRI",
"Prof. N. Ravishankar<br/>Indian Institute of Science (IISc), Bangalore",
"Dr. R. Gopalan<br/>Associate Director, ARCI-Centre for Automotive Energy Materials, Chennai",
"Dr. Prabeer Barpanda<br/>Indian Institute of Science (IISc), Bangalore",
"Prof. Rama Kant<br/>Department of Chemistry, University of Delhi",
"Dr. Sevi Murugavel<br/>Department of Physics & Astrophysics, University of Delhi",
"Dr. M.V. Venkatashamy Reddy<br/>National University of Singapore, Singapore",
"Prof. Zongping Shao<br/>Curtin University, Australia",
"Dr. Shaibal K Sarkar<br/>Indian Institute of Technology Bombay",
"Prof. Dhananjai Pandey<br/>IIT (BHU), Varanasi",
"Prof. O.N. Srivastava<br/>Banaras Hindu University, Varanasi",
"Dr. Julian Schwenzel<br/>Fraunhofer Institute for Manufacturing Technology and Advanced Materials, Germany",
"Prof. Ramaswamy Murugan<br/>President ESSI<br/>Pondicherry University",
"Dr. R. Prakash<br/>Scientist-E, ARCI-Centre for Automotive Energy Materials, Chennai",
"Dr. K. Ramesha<br/>Secretary ESSI<br/>CSIR-CECRI",
"Dr. A S Prakash<br/>Senior Scientist, CSIR-CECRI",
"Prof. Kim Sang Ouk<br/>KAIST, South Korea",
"Prof. KSV Santhanam<br/>Rochester Institute of Technology, NY, USA",
"Dr. T. Maiyalagan<br/>SRM University"]
      }
    },
  }
</script>

<template>
  <v-card max-width="500" class="pa-2 ma-auto">
    <v-card-title class="primary--text">Important Dates</v-card-title>
    <v-timeline>
      <v-timeline-item
        v-for="(event, i) in events"
        :key="i"
        :color="event.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${event.color}--text`"
            v-text="event.date"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${event.color}--text`">
            {{ event.name }}
          </h2>

        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        color: "primary",
        date: "Febraury 2, 2020",
        name: "Abstract Submission Starts",
        description: "Interested candidates will send their abstract"
      },
      {
        color: "primary",
        date: "March 5, 2020",
        name: "Registration Starts",
        description: "Candidates can register and pay the registration fees"
      },
      {
        color: "red",
        date: "Febraury 10, 2020",
        name: "Abstract Submission Deadline",
        description: "Candidates will submit their abstracts to us"
      },
      {
        color: "red",
        date: "March 10, 2020",
        name: "Registration Closes",
        description: "Last date for registration"
      },
      {
        color: "success",
        date: "March 19-21, 2020 ",
        name: "Conference",
        description: "Conference will be conducted in IIT (BHU) Varanasi"
      }
    ]
  })
};
</script>

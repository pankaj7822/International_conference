<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="mx-auto my-12" max-width="900">
          <gmap-map
            :center="center"
            :zoom="16"
            style="width:100%;  height: 400px;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
            ></gmap-marker>
          </gmap-map>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto my-12 pa-5">
          <span class="primary--text font-weight-light display-1">Venue</span>
          <v-divider class="my-2" />
          <span class="font-weight-thin title">
            Indian Institute of Technology (BHU) Varansi <br />
            Uttar Pradesh, India <br />
            Pin-Code: 221005
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 25.2677203, lng: 82.9912582 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.addMarker();
    this.setPlace(this.center);
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

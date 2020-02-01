<template>
  <div ref="map" class="col-md-8"></div>
</template>

<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQzwm2GLINntLMOiqBO7Itj8A6aE9dRpE&callback=initMap"
></script>
<script>
export default {
  methods: {
    initMap() {
      var uluru = { lat: 25.2677203, lng: 82.9912582 };
      var map = new google.maps.Map(this.$refs.map, {
        zoom: 16,
        center: uluru
      });
      var marker = new google.maps.Marker({ position: uluru, map: map });
    },
    created() {
      this.initMap();
    }
  }
};
</script>

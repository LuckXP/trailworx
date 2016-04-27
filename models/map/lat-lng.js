'use strict';

export default Astro.Class.create({
  name: 'LatLng',
  fields: {
    lat: {
      type: Number,
      default: 0,
      simpleValidator: 'required,number'
    },
    lng: {
      type: Number,
      default: 0,
      simpleValidator: 'required,number'
    }
  },
  methods: {
    toArray() {
      return [this.lat, this.lng];
    }
  }
});
'use strict';

import LatLng from './lat-lng'

export default Astro.Class.create({
  name: 'LatLngBounds',
  fields: {
    ne: {
      type: LatLng,
      default: () => new LatLng(),
      simpleValidator: 'required,object'
    },
    sw: {
      type: LatLng,
      default: () => new LatLng(),
      simpleValidator: 'required,object'
    }
  },
  methods: {
    toArray() {
      return [this.ne.toArray(), this.sw.toArray()];
    }
  }
});
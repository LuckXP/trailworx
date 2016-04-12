'use strict';

import LatLng from './lat-lng'

export default Astro.Class({
  name: 'LatLngBounds',
  fields: {
    ne: {
      type: 'object',
      nested: 'LatLng',
      default: () => new LatLng(),
      simpleValidator: 'required,object'
    },
    sw: {
      type: 'object',
      nested: 'LatLng',
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
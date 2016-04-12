'use strict';

import LatLng from './lat-lng'
import LatLngBounds from './lat-lng-bounds'

export default Astro.Class({
  name: 'MapOptions',
  fields: {
    center: {
      type: 'object',
      nested: 'LatLng',
      default: () => new LatLng(),
      simpleValidator: 'required,array'
    },
    maxBounds: {
      type: 'object',
      nested: 'LatLngBounds',
      simpleValidator: 'object'
    }
  }
});


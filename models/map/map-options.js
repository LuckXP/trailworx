'use strict';

import LatLng from './lat-lng'
import LatLngBounds from './lat-lng-bounds'

export default Astro.Class.create({
  name: 'MapOptions',
  fields: {
    center: {
      type: LatLng,
      default: () => new LatLng(),
      simpleValidator: 'required,array'
    },
    maxBounds: {
      type: LatLngBounds,
      simpleValidator: 'object'
    }
  }
});


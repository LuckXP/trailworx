'use strict';

import LatLng from './lat-lng'

export default Astro.Class.create({
  name: 'LabelOptions',
  fields: {
    direction: {
      type: String,
      default: 'right',
      simpleValidator: 'required,string',
      validators: [{
        type: 'choice',
        param: ['left', 'right']
      }]
    },
    offset: {
      type: LatLng,
      default: () => new LatLng({lat: -18, lng: 18}),
      simpleValidator: 'required,array'
    }
  }
});
'use strict';

export default Astro.Class({
  name: 'WorxPhoto',
  behaviors: ['timestamp'],
  fields: {
    userId: {
      type: 'string',
      simpleValidator: 'required'
    },
    url: {
      type: 'string',
      simpleValidator: 'required'
    },
    location: {
      type: 'object',
      nested: 'LatLng',
      simpleValidator: 'required'
    }
  }
});
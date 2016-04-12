'use strict';

import {Worxs} from './collections'
import LatLng from './map/lat-lng'
import Image from './util/image'

export default Astro.Class({
  name: 'Worx',
  collection: Worxs,
  behaviors: ['timestamp'],
  fields: {
  	location: {
      type: 'object',
      nested: 'LatLng',
      simpleValidator: 'required'
    },

    pictures: {
    	type: 'array',
      nested: 'Image',
      simpleValidator: 'required',
      default: () => []
    },

    description: {
      type: 'string',
    },

    categoryId: {
      type: 'string',
      simpleValidator: 'required' 
    },

    authorized: {
    	type: 'boolean',
      simpleValidator: 'required',
      default: false
    },

    voteManager: {

    },

    creatorId: {

    },

    active: {

    },

    comments: {

    }
  },
});



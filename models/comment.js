'use strict';

import {Comments} from './collections'

export default Astro.Class({
  name: 'Comment',
  collections: Comments,
  behaviors: ['timestamp'],
  fields: {
    worxId: {
      type: 'string',
      simpleValidator: 'required'
    },

    userId: {
      type: 'string',
      simpleValidator: 'required'
    },

    body: {
    	type: 'string',
    	simpleValidator: 'required,string'
    }
  }
});
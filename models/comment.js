'use strict';

import {Comments} from './collections'
import User from './user'

export default Astro.Class({
  name: 'Comment',
  collection: Comments,
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
    	simpleValidator: 'required,string',
      default: ''
    }
  },
  relations: {
    getUser: {
      type: 'one',
      class: 'User',
      local: 'userId',
      foreign: '_id'
    }
  }
});
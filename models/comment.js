'use strict';

import {Comments} from './collections'
import User from './user'

export default Astro.Class.create({
  name: 'Comment',
  collection: Comments,
  behaviors: ['timestamp'],
  secured: false,
  fields: {
    worxId: {
      type: String,
      simpleValidator: 'required'
    },

    userId: {
      type: String,
      simpleValidator: 'required'
    },

    body: {
    	type: String,
    	simpleValidator: 'required,string',
      default: ''
    }
  },
  methods: {
    getUser() {
      return User.findOne({_id: this.userId});
    }
  }
});
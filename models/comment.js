'use strict';

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

    creationDate: {
    	type: 'object',
      simpleValidator: 'required',
      default: () => new Date()
    },

    modificationDate: {

    },

    body: {
    	type: 'string',
    	simpleValidator: 'required,string'
    },
  
  }
});
'use strict';

export default Astro.Class({
  name: 'Vote',
  fields: {

    userId: {
    	type: 'string',
    	simpleValidator: 'required'
    },
    voteDirection: {
    	type: 'boolean',
    	simpleValidator: 'required'
    }
  
  }
});

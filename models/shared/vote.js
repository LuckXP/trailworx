'use strict';

export default Astro.Class.create({
  name: 'Vote',
  fields: {

    userId: {
    	type: String,
    	simpleValidator: 'required'
    },
    voteDirection: {
    	type: Boolean,
    	simpleValidator: 'required'
    }

  }
});

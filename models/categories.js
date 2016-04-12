'use strict';

export default Astro.Class({
  name: 'Catagory',
  collections: Catagories,
  fields: {

    

    Name: {
    	type: 'string',
    	simpleValidator: 'required'
    },

    Icon: {
    	type: 'object', //svgs are objects right?
    	simpleValidator: 'required'
    }
  
  }
});
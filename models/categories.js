'use strict';

import {Categories} from './collections'

export default Astro.Class({
  name: 'Category',
  collections: Categories,
  fields: {
    name: {
    	type: 'string',
    	simpleValidator: 'required'
    },
    icon: {
    	type: 'object', //svgs are objects right?
    	simpleValidator: 'required'
    }
  }
});
'use strict';

import {Categories} from './collections'

export default Astro.Class({
  name: 'Category',
  collection: Categories,
  fields: {
    name: {
    	type: 'string',
    	simpleValidator: 'required'
    },
    icon: {
    	type: 'string',
    	simpleValidator: 'required'
    }
  }
});

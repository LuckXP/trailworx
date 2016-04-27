'use strict';

import {Categories} from './collections'

export default Astro.Class.create({
  name: 'Category',
  collection: Categories,
  secured: true,
  fields: {
    name: {
    	type: String,
    	simpleValidator: 'required'
    },
    icon: {
    	type: String,
    	simpleValidator: 'required'
    }
  }
});

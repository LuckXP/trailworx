'use strict';

import {Worxs} from './collections'
import {Categories} from './collections'
import {Comments} from './collections'
import LatLng from './map/lat-lng'
import Image from './util/image'
import VoteManager from './util/vote-manager'
import Comment from './comment'
import Category from './categories'

export default Astro.Class({
  name: 'Worx',
  collection: Worxs,
  behaviors: ['timestamp'],
  fields: {
  	location: {
      type: 'object',
      nested: 'LatLng',
      simpleValidator: 'required'
    },

    categoryId: {
      type: 'string',
      simpleValidator: 'required' 
    },

    creatorId: {
      type: 'string',
      simpleValidator: 'required'

    },

    pictures: {
    	type: 'array',
      nested: 'Image',
      simpleValidator: 'required',
      default: () => []
    },

    description: {
      type: 'string',
    },

    authorized: {
    	type: 'boolean',
      simpleValidator: 'required',
      default: false
    },

    voteManager: {
      type: 'object',
      simpleValidator: 'required',
      nested: 'VoteManager',
      default: () => new VoteManager()
    },

    comments: {
      type: 'array',
      nested: 'Comment',
      simpleValidator: 'required',
      default: () => []
    },

    active: {
      type: 'boolean',
      simpleValidator: 'required'
    }

  },
});



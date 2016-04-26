'use strict';

import {Worxs} from './collections'
import {Categories} from './collections'
import {Comments} from './collections'
import LatLng from './map/lat-lng'
import VoteManager from './shared/vote-manager'
import Comment from './comment'
import Category from './category'

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

    userId: {
      type: 'string',
      simpleValidator: 'required'
    },

    description: {
      type: 'string',
      default: ''
    },
    
    voteManager: {
      type: 'object',
      simpleValidator: 'required',
      nested: 'VoteManager',
      default: () => new VoteManager()
    },

    active: {
      type: 'boolean',
      simpleValidator: 'required',
      default: true
    }
  },
  relations: {
    getWorxPhotos: {
      type: 'many',
      class: 'WorxPhoto',
      local: '_id',
      foreign: 'metadata.worxId'
    },

    getComments: {
      type: 'many',
      class: 'Comment',
      local: '_id',
      foreign: 'worxId'
    },

    getCategory: {
      type: 'one',
      class: 'Category',
      local: 'categoryId',
      foreign: '_id'
    }
  },
  events: {
    beforeRemove() {
      this.getWorxPhotos().fetch().forEach(photo => photo.remove());
      this.getComments().fetch().forEach(comment => comment.remove());
    }
  }
});



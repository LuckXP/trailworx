'use strict';

import {Worxs} from './collections'
import {Categories} from './collections'
import {Comments} from './collections'
import {WorxPhotos} from './collections'
import LatLng from './map/lat-lng'
import VoteManager from './shared/vote-manager'
import Comment from './comment'
import Category from './category'
import WorxPhoto from './worx-photo'

export default Astro.Class.create({
  name: 'Worx',
  collection: Worxs,
  behaviors: ['timestamp'],
  secured: false,
  fields: {
  	location: {
      type: LatLng,
      simpleValidator: 'required'
    },

    categoryId: {
      type: String,
      simpleValidator: 'required'
    },

    userId: {
      type: String,
      simpleValidator: 'required'
    },

    description: {
      type: String,
      default: ''
    },

    voteManager: {
      type: VoteManager,
      simpleValidator: 'required',
      default: () => new VoteManager()
    },

    active: {
      type: Boolean,
      simpleValidator: 'required',
      default: true
    }
  },
  methods: {
    getCategory() {
      return Category.findOne({_id: this.categoryId});
    },
    getComments() {
      return Comment.find({worxId: this._id}).fetch();
    },
    getWorxPhotos() {
      return WorxPhoto.find({'metadata.worxId': this._id}).fetch();
    }
  },
  events: {
    beforeRemove({currentTarget: self}) {
      const photos = self.getWorxPhotos();
      console.log(photos);
      photos.forEach(photo => WorxPhotos.remove(photo._id));
      self.getComments().forEach(comment => comment.remove());
    }
  }
});



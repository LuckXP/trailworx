'use strict';

import {Meteor} from 'meteor/meteor'
import Category from '../models/category'
import Worx from '../models/worx'
import Comment from '../models/comment'
import WorxPhoto from '../models/worx-photo'

Meteor.publish(null, function() {
  return Meteor.users.find({ _id: this.userId }, { fields: { 'services': 1 } });
});

Meteor.publish('currentWorx', function(currentWorxId) {
  return [
    Comment.find({worxId: currentWorxId}),
    WorxPhoto.find({'metadata.worxId': currentWorxId})
  ]
});

Meteor.publish('worxs', function() {
  return Worx.find()
});

Meteor.publish('categories', function() {
  return [
    Category.find()
  ]
});
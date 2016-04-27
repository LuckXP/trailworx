'use strict';

import {Meteor} from 'meteor/meteor'
import Category from '../../models/category'
import Worx from '../../models/worx'

Meteor.startup(() => {
  if (process.env.NODE_ENV === 'production') {
    Category.remove({});
    Worx.remove({});
    Meteor.users.remove({});
  }

  /*
   *** Categories ***
   */
  if (Category.find().count() === 0) {

    new Category({
      name: 'Fallen Tree',
      markerFilename: 'marker-fallen-tree.png'
    }).save();

    new Category({
      name: 'Wash Out',
      markerFilename: 'marker-wash-out.png'
    }).save();

    new Category({
      name: 'Debris or Trash',
      markerFilename: 'marker-debris-trash.png'
    }).save();

    new Category({
      name: 'Invasive Species',
      markerFilename: 'marker-invasive-species.png'
    }).save();

    new Category({
      name: 'Off Camber Trail',
      markerFilename: 'marker-off-camber.png'
    }).save();

    new Category({
      name: 'Rock Fall',
      markerFilename: 'marker-rock-fall.png'
    }).save();

    new Category({
      name: 'Trail Feature',
      markerFilename: 'marker-trail-feature.png'
    }).save();

    new Category({
      name: 'Other',
      markerFilename: 'marker-other.png'
    }).save();



  }
});

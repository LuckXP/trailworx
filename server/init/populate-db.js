'use strict';

import {Meteor} from 'meteor/meteor'
import Category from '../../models/category'

Meteor.startup(() => {
  if (process.env.NODE_ENV === 'production') {
    Category.remove({});
  }

  /*
   *** Categories ***
   */
  if (Category.find().count() === 0) {

    new Category({
      name: 'Fallen Tree'
    }).save();

    new Category({
      name: 'Wash Out'
    }).save();

    new Category({
      name: 'Rock Fall'
    }).save();

    new Category({
      name: 'Troll Droppings'
    }).save();

    new Category({
      name: 'Magic Mushroom Patch'
    }).save();

  }
});

'use strict';

import {Mongo} from 'meteor/mongo';

export const Worxs = new Mongo.Collection('worxs');
export const Comments = new Mongo.Collection('comments');
export const Categories = new Mongo.Collection('categories');

export const WorxPhotos = new FileCollection('worx-photos', {
  resumable: true,
  http: [ {
    method: 'get',
    path: '/:md5',  // this will be at route "/gridfs/worx-photos/:md5"
    lookup: params => ({ md5: params.md5 })
  } ]
});

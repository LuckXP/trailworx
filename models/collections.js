'use strict';

import {Mongo} from 'meteor/mongo';

export const Worxs = new Mongo.Collection('worxs');
export const Comments = new Mongo.Collection('comments');
export const Categories = new Mongo.Collection('categories');

export const WorxPhotos = new FileCollection('worx-photos', {
  resumable: true,
  http: [ {
    method: 'get',
    path: '/:_id',  // this will be at route "/gridfs/worx-photos/:md5"
    lookup: params => ({ _id: params._id })
  },
  { method: 'options',  // Enable an OPTIONS endpoint (for CORS)
    path: '/:_id',  // this will be at route "/gridfs/myFiles/:md5"
    lookup: function (params, query) {  // uses express style url params
      return { _id: params._id };       // a query mapping url to myFiles
    },
    handler: function (req, res, next) {  // Custom express.js handler for OPTIONS
      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'http://meteor.local',  // For Cordova
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'x-auth-token, user-agent',
        'Access-Control-Allow-Methods': 'GET, PUT'
      });
      res.end();
      return;
    }
  } ]
});

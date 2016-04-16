'use strict';

import {Mongo} from 'meteor/mongo';

export const Worxs = new Mongo.Collection('worxs');
export const Comments = new Mongo.Collection('comments');
export const Categories = new Mongo.Collection('categories');

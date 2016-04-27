'use strict';

import Comment from '../models/comment'
import WorxPhoto from '../models/worx-photo'
import User from '../models/user'

Meteor.methods({
  removeWorxPhotoById(photoId) {
    WorxPhoto.remove(photoId);
  }
});
'use strict';

import WorxPhoto from '../models/worx-photo'

Meteor.methods({
  removeWorxPhotoById(photoId) {
    WorxPhoto.remove(photoId);
  }
});
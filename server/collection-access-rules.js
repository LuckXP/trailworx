import {WorxPhotos} from '../models/collections'

Meteor.startup(() => {
  WorxPhotos.allow({
    insert(userId, file) {
      file.metadata = file.metadata || {};
      file.metadata.owner = userId;
      return true;
    },
    remove(userId, file) {
      return (userId === file.metadata.owner);
    },
    read(userId, file) {
      return true;
    },
    write(userId, file, fields) {
      console.log(file);
      return (userId === file.metadata.owner);
    }
  });
});
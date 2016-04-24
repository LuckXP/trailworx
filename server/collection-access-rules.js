import {WorxPhotos} from '../models/collections'

Meteor.startup(() => {
  WorxPhotos.allow({
    insert(userId, file) {
      file.metadata.userId = userId;
      return true;
    },
    remove(userId, file) {
      return (userId === file.metadata.userId);
    },
    read(userId, file) {
      return true;
    },
    write(userId, file) {
      return (userId === file.metadata.userId);
    }
  });
});
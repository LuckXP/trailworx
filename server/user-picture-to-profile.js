'use strict';

import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser(function(options, user) {
    const {services} = user;

    if (services) {
      user.profile = user.profile || {};

      if (services.facebook) {
        user.profile.picture = services.facebook.picture;
      } else if (services.twitter) {
        user.profile.picture = services.twitter.profile_image_url_https;
      } else if (services.google) {
        user.profile.picture = services.google.picture;
      }
    }

    if (options.profile) {
      user.profile = {...user.profile, ...options.profile};
    }

    return user;
  });
});

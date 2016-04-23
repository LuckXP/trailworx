'use strict';

import Cookies from 'js-cookie'

Meteor.startup(() => {
  Tracker.autorun(() => {
    Meteor.userId();
    Cookies.set('X-Auth-Token', Accounts._storedLoginToken());
  });
});

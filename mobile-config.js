'use strict';

App.info({
  id: 'app.trail-worx',
  name: 'TrailWorx',
  description: 'Fix trails, build community!',
  author: 'TrailWorx, LTD',
  email: 'contact@trailworx.com',
  website: 'http://trailworx.com'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.accessRule("blob:*"); // vsivsi:file-collection bug workaround
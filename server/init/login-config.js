import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {ServiceConfiguration} from 'meteor/service-configuration';

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({});

  const {loginServices} = Meteor.settings;

  const {facebook} = loginServices;
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: facebook.appId,
        secret: facebook.secret
      }
    }
  );

  const {google} = loginServices;
  ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
      $set: {
        clientId: google.clientId,
        secret: google.secret
      }
    }
  );

  const {twitter} = loginServices;
  ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
      $set: {
        consumerKey: twitter.consumerKey,
        secret: twitter.secret
      }
    }
  );

  Accounts.onCreateUser(function(options, user) {
    if (user.services && user.services.facebook) {
      user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    }

    if (options.profile) {
      user.profile = {...user.profile, ...options.profile};
    }

    return user;
  });
});
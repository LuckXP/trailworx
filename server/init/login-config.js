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
    const {services} = user;

    if (services) {
      user.profile = user.profile || {};

      if (services.facebook) {
        user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
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
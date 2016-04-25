export default Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: 'array',
    services: 'object',
    createdAt: 'date',
    profile: 'object'
  }
});
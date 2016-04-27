export default Astro.Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: [String],
    services: Object,
    createdAt: Date,
    profile: Object
  }
});
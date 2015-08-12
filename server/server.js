Meteor.publish('caravans', function() {
  return Caravans.find();
});

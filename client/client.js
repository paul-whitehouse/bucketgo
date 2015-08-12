// Subscribe to Collections
Meteor.subscribe('caravans');

// Router configuration
Router.configure({
  layoutTemplate:"main",
  notFoundTemplate:"notFoundTemplate",
  loadingTemplate:"loadingTemplate",
  yieldRegions:{
  }
});

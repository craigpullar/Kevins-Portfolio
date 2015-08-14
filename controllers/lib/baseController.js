if (Meteor.isClient) {
  // this is basically base controller right?
  // this is the firrst time RouteController has been defined, unless its predefined by Iron routes
  //                                            vvvvvv
  AppController = RouteController.extend({
    layoutTemplate: 'AppLayout',

    onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },

    action: function () {
      console.log('this should be overridden!');
    }
  });

}
if (Meteor.isClient) {

	loginController = RouteController.extend({
		layoutTemplate: 'LoginLayout',
		showLogin: function() {
		}
	});

}
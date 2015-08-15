if (Meteor.isClient) {

	loginController = RouteController.extend({
		layoutTemplate: 'LoginLayout',
		showLogin: function() {
		},
		logout: function() {
			Session.set('logged_in', false);
		}
	});

}
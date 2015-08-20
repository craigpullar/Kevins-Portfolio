if (Meteor.isClient) {

	appController = RouteController.extend({
		layoutTemplate: 'AppLayout',
		welcome: function() {
			this.render('welcome', {to: 'content'});
		},
		weddings: function() {
			this.render('weddings', {to: 'content'});
		},
		portraits: function() {
			this.render('portraits', {to: 'content'});
		},
		galleries: function() {
			this.render('galleries', {to: 'content'});
		},
		contact: function() {
			this.render('contact', {to: 'content'});
		},
		blog: function() {
			this.render('blog', {to: 'content'});
		},
		viewGallery : function() {
			this.render('gallery_full', {to : 'content'});
		},
	});

}
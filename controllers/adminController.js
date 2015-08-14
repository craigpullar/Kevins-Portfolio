if (Meteor.isClient) {

	adminController = RouteController.extend({
		layoutTemplate: 'AdminLayout',
		welcome: function() {
			this.render('welcome', {to: 'content'});
		},
		blog : function() {
			this.render('admin_blog', {to: 'content'});
		},
		newPost : function() {
			this.render('newPost', {to:'content'});
		},
		editPost : function() {
			this.render('newPost', {to:'content'});
		},
		weddings : function() {
			this.render('admin_weddings', {to:'content'});
		},
		portaits : function() {
			this.render('admin_portraits', {to:'content'});
		},
		newGallery: function() {
			this.render('new_gallery', {to:'content'});
		},
		editGallery: function() {
			this.render('new_gallery', {to:'content'});
		}
	});

}
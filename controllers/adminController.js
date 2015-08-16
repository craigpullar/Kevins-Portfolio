if (Meteor.isClient) {

	adminController = RouteController.extend({
		
		onBeforeAction: function (pause) {
			if(!Session.get('logged_in')){
				Router.go('/login');
				return pause();
			}
			else {	
				this.layout("AdminLayout");
				this.next();
			}
			this.layout("AdminLayout");
			this.next();
		},

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
		},
		viewGallery: function() {

			this.render('admin_gallery', {to:'content'});
		},
		newImage: function() {
			this.render('new_image', {to:'content'});
		}
	});

	imageController = RouteController.extend({
		viewImage: function() {
			this.render('view_image');
		}
	});
}
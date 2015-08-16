/*--------------*/
/* SITE ROUTES */
/*-------------*/

Router.route('/', {
	after: function() {
		document.title = 'Welcome | Pictures of Lily'
	},
	controller: 'appController',
	action: 'welcome'
});


Router.route('/blog', {
	after: function() {
		document.title = 'Blog | Pictures of Lily'
	},
	controller: 'appController',
	action: 'blog'
});

Router.route('/portraits', {
	after: function() {
		document.title = 'Portraits | Pictures of Lily'
	},
	controller: 'appController',
	action: 'portraits'
});

Router.route('/weddings', {
	after: function() {
		document.title = 'Weddings | Pictures of Lily'
	},
	controller: 'appController',
	action: 'weddings'
});

Router.route('/contact', {
	after: function() {
		document.title = 'Contact | Pictures of Lily'
	},
	controller:'appController',
	action: 'contact'
});

/*--------------------*/
/* END OF SITE ROUTES */
/*--------------------*/

/*--------------*/
/* ADMIN ROUTES */
/*--------------*/

Router.route('/login', {
	after: function() {
		document.title = 'login | Pictures of Lily'
	},
	controller: 'loginController',
	action: 'showLogin'
});
Router.route('/logout', {
	after: function() {
		document.title = 'login | Pictures of Lily'
	},
	controller: 'loginController',
	action: 'logout'
});
Router.route('admin/blog', {
	after: function() {
		document.title = 'blog | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'blog'
});
Router.route('admin/weddings', {
	after: function() {
		document.title = 'weddings | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'weddings'
});
Router.route('admin/portraits', {
	after: function() {
		document.title = 'portraits | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'portaits'
});
Router.route('admin/dashboard', {
	after: function() {
		document.title = 'dashboard | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'dashboard'
});

/* POST ROUTES */

Router.route('admin/new-post', {
	after: function() {
		document.title = 'new post | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'newPost',
	data: function (){
		_id  = this.params._id;
		templateData = {
			action: 'post',
		};
		return templateData;
	}
});
Router.route('admin/edit-post/:_id', {
	after: function() {
		document.title = 'edit post | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'editPost',
	data: function (){
		_id  = this.params._id;
		templateData = {
			_id: _id,
			post: Posts.findOne({_id: _id}),
			action: 'edit',
		};
		return templateData;
	}
});

/* GALLERY ROUTES */

Router.route('admin/new-gallery/:type', {
	after: function() {
		document.title = 'new gallery | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'newGallery',
	data: function (){
		type = this.params.type;
		templateData = {
			type: type,
			action: 'add',
		};
		return templateData;
	}
});
Router.route('admin/edit-gallery/:_id', {
	after: function() {
		document.title = 'new gallery | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'editGallery',
	data: function (){
		_id = this.params._id;
		templateData = {
			_id: _id,
			action: 'edit',
			gallery: Galleries.findOne({_id: _id}),
		};
		return templateData;
	}
});
Router.route('admin/view-gallery/:_id',{
	after: function() {
		document.title = 'gallery | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'viewGallery',
	data: function (){
		_id = this.params._id;
		templateData = {
			_id: _id,
		};
		return templateData;
	}
});
Router.route('admin/new-image/:id', {
	after: function() {
		document.title = 'new image | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'newImage',
});
Router.route('admin/image/:id',{
	after: function() {
		document.title = 'image | Pictures of Lily'
	},
	controller: 'imageController',
	action: 'viewImage',
});

/*---------------------*/
/* END OF ADMIN ROUTES */
/*---------------------*/
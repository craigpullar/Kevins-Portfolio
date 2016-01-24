/*--------------*/
/* SITE ROUTES */
/*-------------*/

Router.route('/', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Welcome | Pictures of Lily'
},
controller: 'appController',
action: 'welcome',
});


Router.route('/blog', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("posts");
},
after: function() {
	document.title = 'Blog | Pictures of Lily'
},
controller: 'appController',
action: 'blog'
});

Router.route('/portraits', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Portraits | Pictures of Lily'
},
controller: 'appController',
action: 'portraits'
});

Router.route('/weddings', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Weddings | Pictures of Lily'
},
controller: 'appController',
action: 'weddings',
data: function() {
	templateData = {
		Galleries : Galleries.find({type: "wedding",image_count: {$gt: 0}}, {sort: {createdAt: -1}}),
	};
	return templateData;
}
});
Router.route('/landscape', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Landscape | Pictures of Lily'
},
controller: 'appController',
action: 'landscape'
});

Router.route('/customer', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Customer| Pictures of Lily'
},
controller: 'appController',
action: 'customer',
});
Router.route('/contact', {
	after: function() {
		document.title = 'Contact | Pictures of Lily'
	},
	controller: 'appController',
	action: 'contact'
});
Router.route('/view-gallery/:id', {
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    return Meteor.subscribe("gallery_images");
},
after: function() {
	document.title = 'Gallery | Pictures of Lily'
},
controller: 'appController',
action: 'viewGallery',
data: function() {
	_id = this.params.id;
	templateData = {
		_id: _id,
		gallery: Galleries.findOne({
			_id: _id
		}),
		images : GalleryImages.find({gallery_id: _id},{sort: {createdAt: -1}}),
	};
	return templateData;
}
});
Router.route('/gallery-login/:id', {
	after: function() {
		document.title = 'Gallery login | Pictures of Lily'
	},
	controller: 'appController',
	action: 'galleryLogin',
	data: function() {
		_id = this.params.id;
		templateData = {
			_id: _id,
			gallery: Galleries.findOne({
				_id: _id
			}),
		};
		return templateData;
	}
});

// NEED A NEW ROUTE HERE FOR LANDSCAPE


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
Router.route('admin/landscape', {
	after: function() {
		document.title = 'Landscape | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'landscape'
});
Router.route('admin/portraits', {
	after: function() {
		document.title = 'portraits | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'portaits'
});
Router.route('admin/slideshow', {
	after: function() {
		document.title = 'Slideshow | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'slideshow'
});

/* POST ROUTES */

Router.route('admin/new-post', {
	after: function() {
		document.title = 'new post | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'newPost',
	data: function() {
		_id = this.params._id;
		templateData = {
			action: 'post'
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
	data: function() {
		_id = this.params._id;
		templateData = {
			_id: _id,
			post: Posts.findOne({
				_id: _id
			}),
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
	data: function() {
		type = this.params.type;
		templateData = {
			type: type,
			action: 'add',
			action_name: 'Create gallery',
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
	data: function() {
		_id = this.params._id;
		templateData = {
			_id: _id,
			action: 'edit',
			action_name: 'Edit gallery',
			gallery: Galleries.findOne({
				_id: _id
			}),
		};
		return templateData;
	}
});
Router.route('admin/view-gallery/:_id', {
	after: function() {
		document.title = 'gallery | Pictures of Lily'
	},
	controller: 'adminController',
	action: 'viewGallery',
	data: function() {
		_id = this.params._id;
		templateData = {
			_id: _id
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
Router.route('admin/image/:id', {
	after: function() {
		document.title = 'image | Pictures of Lily'
	},
	controller: 'imageController',
	action: 'viewImage',
});
Router.route('admin/slideshow-image/:id', {
	after: function() {
		document.title = 'image | Pictures of Lily'
	},
	controller: 'imageController',
	action: 'viewSlideshowImage',
});


// NEED A NEW ROUTE HERE FOR LANDSCAPE

/*---------------------*/
/* END OF ADMIN ROUTES */
/*---------------------*/

/* --------- */
/* 404 ROUTE */
/* --------- */

Router.route("/(.*)", function() {
	this.render('pageNotFound');
	this.next();
});
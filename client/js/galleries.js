Galleries = new Mongo.Collection("galleries");
Images = new FS.Collection("images", {
	stores: [new FS.Store.FileSystem("images",{path: './public/uploads'})]
});
GalleryImages = new Mongo.Collection("gallery_images");

if(Meteor.isClient) {
	Meteor.subscribe("gallery_images");
	Meteor.subscribe("galleries");
	Meteor.subscribe("images");
	/*------------*/
	/* WEDDINGS JS */
	/*------------*/
	Template.admin_weddings.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/wedding');
		}
	});
	Template.admin_weddings.helpers({
		Galleries: function () {
			return Galleries.find({type: "wedding"}, {sort: {createdAt: -1}});
		}
	});
	Template.wedding_galleries.helpers({
		Galleries: function () {
			return Galleries.find({type: "wedding",image_count: {$gt: 0}}, {sort: {createdAt: -1}});
		},
	});
	Template.wedding_galleries.events({
		"click .img" : function() {
			Router.go('/view-gallery/' + this._id);
		}
	});


	/*-------------*/
	/* POTRAITS JS */
	/*-------------*/
	Template.admin_portraits.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/portrait');
		}

	});

	Template.admin_portraits.helpers({
		Galleries: function () {
			return Galleries.find({type: "portrait"}, {sort: {createdAt: -1}});
		}
	});
	Template.portrait_galleries.helpers({
		Galleries: function () {
			return Galleries.find({type: "portrait",image_count: {$gt: 0}}, {sort: {createdAt: -1}});
		},
	});
	Template.portrait_galleries.events({
		"click .img" : function() {
			Router.go('/view-gallery/' + this._id);
		}
	});

	/*------------*/
	/* GALLERY JS */
	/*------------*/
	Template.new_gallery.events ({
		"submit form#add": function(event) {
			event.preventDefault();
			var title = event.target.title.value;
			var parts = location.href.split('/');
			var type = parts.pop();
			Galleries.insert({
				title: title,
				createdAt: new Date(),
				type: type,
        		image_count: 0, // current time
        	});

			Router.go('admin/'+type+'s');
		},
		"submit form#edit": function(event) {
			event.preventDefault();
			var title = event.target.title.value;
			var parts = location.href.split('/');
			var id = parts.pop();
			var type = Galleries.findOne({_id: _id}).type;
			Galleries.update(id, {
				$set: {title: title}
			});
			Router.go('admin/'+type+'s');
		}


	});
	Template.admin_gallery_row.events({
		"click td.delete": function () {
			Galleries.remove(this._id);
		},
		"click td.edit": function() {
			Router.go('/admin/edit-gallery/'+this._id);
		},
		"click a.goToGallery": function(event) {
			event.preventDefault();
			Router.go('/admin/view-gallery/' + this._id );
		}
	});

	Template.gallery.helpers({
		getImage : function() {	
			return GalleryImages.find({gallery_id : this._id}).fetch()[0].image;
		}
	});


	/*-----------*/
	/* IMAGES JS */
	/*-----------*/
	Template.admin_gallery.rendered = function () {
		var parts = location.href.split('/');
		var gallery_id = parts.pop();

		Session.set('gallery_id',gallery_id);
	};
	Template.admin_gallery.helpers({
		imagesForGallery : function() {
			return GalleryImages.find({gallery_id: Session.get('gallery_id')},{sort: {createdAt: -1}});
		},
		gallery : function() {
			return Session.get('gallery_id');
		}
	});
	Template.new_image.events({
		"submit form": function(event) {
			event.preventDefault();
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			var files = event.target.files.files;
			console.log(files);
			for (var i = 0, ln = files.length; i < ln; i++) {
				var file = files[i];
				var fileObj = Images.insert(file);
				GalleryImages.insert({
					gallery_id: gallery_id,
					image: fileObj,
					createdAt: new Date(),
				});
			}
			var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
			Galleries.update(gallery_id, {
				$set: {image_count: current_image_count+files.length}
			});
			Router.go("/admin/view-gallery/"+gallery_id)
		}

	});
	Template.view_image.helpers({
		getImage : function(){
			var parts = location.href.split('/');
			var id = parts.pop();
			return Images.findOne({_id: id});
		}
	});
	Template.admin_image_row.events({
		"click td.delete": function () {
			Images.remove(this.image._id);
			GalleryImages.remove(this._id);
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
			Galleries.update(gallery_id, {
				$set: {image_count: current_image_count-1}
			});
		},
	});

	/*----------------*
	/*GALLERY FULL JS */
	/*----------------*/
	Template.gallery_full.helpers({
		images : function() {

			return GalleryImages.find({gallery_id: Session.get('gallery_id')},{sort: {createdAt: -1}});
		},
		gallery : function () {
			return Galleries.findOne({_id: Session.get('gallery_id')});
		}
	});
	Template.gallery_full.rendered = function () {
		var parts = location.href.split('/');
		var gallery_id = parts.pop();

		Session.set('gallery_id',gallery_id);
	};
}
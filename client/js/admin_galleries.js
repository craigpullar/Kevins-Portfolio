if(Meteor.isClient) {
	
	/*-----------------------*/
	/* DECLARE SUBSCRIPTIONS */
	/*-----------------------*/
	Meteor.subscribe("gallery_images");
	Meteor.subscribe("galleries");
	Meteor.subscribe("images");
	Meteor.subscribe("landscape_slideshow");
	Meteor.subscribe("portrait_slideshow");


	/* ------------ */
	/* LANDSCAPE JS */
	/* ------------ */


	Template.admin_landscape.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/landscape');
		}
	});
	Template.admin_landscape.helpers({
		Galleries: function () {
			return Galleries.find({type: "landscape"}, {sort: {createdAt: -1}});
		}
	});

	/*------------*/
	/* WEDDING JS */
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

	/*-------------*/
	/* POTRAITS JS */
	/*-------------*/
	Template.admin_portraits.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/portrait');
		}

	});



	/*------------*/
	/* GALLERY JS */
	/*------------*/

	Template.new_gallery.rendered = function () {
		if($('form#add').length){
			console.log('add');
			Date.prototype.toDateInputValue = (function() {
				var local = new Date(this);
				local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
				return local.toJSON().slice(0,10);
			});
			$('input.createdAt').val(new Date().toDateInputValue());
		}
	};
	Template.new_gallery.events ({
		"click #back_gallery_button" : function(){
			var parts = location.href.split('/');
			var type = parts.pop();
			if (type != 'wedding' && type != 'portrait') {
				
				var id = parts.pop();
				var new_type = Galleries.findOne({_id: _id}).type;
				Router.go('admin/'+new_type+'s');
			}
			Router.go('admin/'+type+'s');
			

		},
		"submit form#add": function(event) {
			event.preventDefault();
			var title = event.target.title.value;
			if(title == '') {
				$('#message').fadeIn();
			}else {


				var parts = location.href.split('/');
				var type = parts.pop();
				var priv = event.target.priv.checked;
			var password = event.target.password.value; //GET INFO FROM FORM
			var date = new Date(event.target.createdAt.value);
			Galleries.insert({
				title: title,
				createdAt: date,
				type: type,
				image_count: 0,
				private: priv,
        		password: password // current time
        	});
			if (type == "landscape") {
				Router.go('admin/'+type);
			}
			Router.go('admin/'+type+'s');
		}
	},
	"submit form#edit": function(event) {
		event.preventDefault();
		var title = event.target.title.value;
		if(title == '') {
			$('#message').fadeIn();
		}else {
			var parts = location.href.split('/');
			var id = parts.pop();
			var type = Galleries.findOne({_id: _id}).type;
			var priv = event.target.priv.checked;
			var date = new Date(event.target.createdAt.value);
			var password = event.target.password.value;
			Galleries.update(id, {
				$set: {title: title, private : priv, password : password, createdAt : date}
			});
			if (type == "landscape") {
				Router.go('admin/'+type);
			}
			Router.go('admin/'+type+'s');
		}
	},
	"click .private_checkbox": function(event) {
		var cbIsChecked = $('#private_pass').prop('disabled');
		$('#private_pass').prop('disabled', !cbIsChecked); 
	},
	"keypress input[name='title']" : function(event) {
		if (event.which === 13) {
			$('form').submit();
		}
	}


});
	function confirm(callback) {
		$('#backdrop').fadeIn();
		$('#confirm').fadeIn()
		$('#backdrop, #confirm #cancel').click(function(){
			$('#backdrop').fadeOut();
			$('#confirm').fadeOut();
		});
		$("#confirm #delete").click(function(){
			callback();
			$('#backdrop').fadeOut();
			$('#confirm').fadeOut();
		});
	}
	Template.admin_gallery_row.events({
		"click td.delete": function () {
			var gallery = this;
			confirm(function(event){
				Galleries.remove(gallery._id);
			});
		},
		"click td.edit": function() {
			Router.go('/admin/edit-gallery/'+this._id);
		},
		"click a.goToGallery": function(event) {
			event.preventDefault();
			Router.go('/admin/view-gallery/' + this._id );
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
	Template.new_image.helpers({
		slideshow : function(){
			var parts = location.href.split('/');
			var slideshow = parts.pop();
			if(slideshow == 'slideshow') return true;
			return false;
		},
		getCurrentStore : function() {
			return Session.get('current_slideshow_store');
		},
		isLandscapeUpload : function() {
			if(Session.get('current_slideshow_store') == 'landscape') return true;
			return false;
		},
		isPortraitUpload : function(){
			if(Session.get('current_slideshow_store') == 'portrait') return true;
			return false;
		}
	});
	Template.new_image.events({
		"click #back_gallery_button" : function() {
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			if (gallery_id == 'slideshow') Router.go("/admin/slideshow");
			else Router.go("/admin/view-gallery/"+gallery_id);
		},
		"change input.upload" : function() {
			$('form').submit();
		},
		"submit form": function(event) {
			event.preventDefault();
			var parts = location.href.split('/');
			var gallery_id = parts.pop();
			var files = event.target.files.files;
			var current_store = Session.get('current_slideshow_store')
			for (var i = 0, ln = files.length; i < ln; i++) {
				var file = files[i];
				if (gallery_id == 'slideshow') {
					if(current_store == 'landscape')
						LandscapeSlideshow.insert(file);
					else
						PortraitSlideshow.insert(file);

				}else {
					var fileObj = Images.insert(file);
					fileObj.name(fileObj._id);
				// Images.update({_id: fileObj._id}, {$set: {'metadata.name': "PEWDS"}});
				GalleryImages.insert({
					gallery_id: gallery_id,
					image: fileObj,
					createdAt: new Date(),
				});
			}

		}
		if (gallery_id == 'slideshow') {
			Router.go("/admin/slideshow");
		}else {
			var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
			Galleries.update(gallery_id, {
				$set: {image_count: current_image_count+files.length}
			});
			Router.go("/admin/view-gallery/"+gallery_id);
		}
	}

});
	Template.view_image.helpers({
		getImage : function(){
			var parts = location.href.split('/');
			var id = parts.pop();
			return Images.findOne({_id: id});
		}
	});
	Template.admin_image_row.helpers({
		"isUploaded" : function() {
			var image = Images.findOne({_id : this.image._id});
			if (image)
				return image.isUploaded();
		}
	});
	Template.admin_image_row.events({
		"click td.delete": function () {
			var image = this;
			confirm(function(event){
				Images.remove(image.image._id);
				GalleryImages.remove(image._id);
				var parts = location.href.split('/');
				var gallery_id = parts.pop();
				var current_image_count = Galleries.findOne({_id : gallery_id}).image_count;
				Galleries.update(gallery_id, {
					$set: {image_count: current_image_count-1}
				});
			});
			
		},
	});


	/* ######### */
	/* SLIDESHOW */
	/* ######### */

	Template.admin_slideshow.rendered = function () {
		var current_store = Session.get('current_slideshow_store');
		if(!current_store)
			Session.set('current_slideshow_store', 'landscape');
		else if(current_store == 'landscape') {
			$('a#landscape, a#portrait').removeClass('active');
			$('a#landscape').addClass('active');
		}
		else {
			$('a#landscape, a#portrait').removeClass('active');
			$('a#portrait').addClass('active');
		}
	};
	Template.admin_slideshow.helpers({
		images : function() {
			var current_store = Session.get('current_slideshow_store');
			if (current_store == 'landscape')
				return LandscapeSlideshow.find();
			return PortraitSlideshow.find();
		}
	});
	Template.admin_slideshow.events({
		"click a#landscape": function(event) {
			event.preventDefault();
			Session.set('current_slideshow_store', 'landscape');
			$('a#landscape, a#portrait').removeClass('active');
			$('a#landscape').addClass('active');
		},
		"click a#portrait": function(event) {
			event.preventDefault();
			Session.set('current_slideshow_store', 'portrait');
			$('a#landscape, a#portrait').removeClass('active');
			$('a#portrait').addClass('active');
		}
	});
	Template.admin_slideshow_row.helpers({
		"isUploaded" : function() {
			var current_store = Session.get('current_slideshow_store');
			if (current_store == 'landscape')
				var image = LandscapeSlideshow.findOne({_id : this._id});
			else {
				var image = PortraitSlideshow.findOne({_id : this._id});
			}
			if (image)
				return image.isUploaded();
		},
		getCurrentStore : function() {
			return Session.get('current_slideshow_store');
		},
	});
	Template.admin_slideshow_row.events({
		"click td.delete": function () {
			var image = this;
			confirm(function(event){
				var current_store = Session.get('current_slideshow_store');
				if (current_store == 'landscape')
					LandscapeSlideshow.remove(image._id);
				PortraitSlideshow.remove(image._id);
			});
			
		},
	});
	Template.view_slideshow_image.helpers({
		getImage : function(){
			var parts = location.href.split('/');
			var id = parts.pop();
			var image = LandscapeSlideshow.findOne({_id: id});
			if(image)
				return image;
			else
				return PortraitSlideshow.findOne({_id: id});
		},
		isLandscapeImage : function (){
			var parts = location.href.split('/');
			var id = parts.pop();
			var image = LandscapeSlideshow.findOne({_id: id});
			if(image)
				return true;
			else
				return false;
		}
	});

}
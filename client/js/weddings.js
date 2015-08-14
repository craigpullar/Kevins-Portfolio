Galleries = new Mongo.Collection("galleries");
if(Meteor.isClient) {
	Template.admin_weddings.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/wedding');
		}

	});
	Template.admin_portraits.events({
		"click a#add_gallery_button": function() {
			Router.go('/admin/new-gallery/portrait');
		}

	});
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
	Template.admin_gallery.events({
		"click td.delete": function () {
			Galleries.remove(this._id);
		},
		"click td.edit": function() {
			Router.go('/admin/edit-gallery/'+this._id);
		}
	});
	// Template.wedding_gallery.helpers({
	// 	Galleries: function () {
	// 		return Galleries.find({type: "wedding"}, {sort: {createdAt: -1}});
	// 	}
	// });


Template.admin_weddings.helpers({
	Galleries: function () {
		return Galleries.find({type: "wedding"}, {sort: {createdAt: -1}});
	}
});
	// Template.portait_gallery.helpers({
	// 	posts: function () {
	// 		return Posts.find({type: "portrait"}, {sort: {createdAt: -1}});
	// 	}
	// });
Template.admin_portraits.helpers({
	Galleries: function () {
		return Galleries.find({type: "portrait"}, {sort: {createdAt: -1}});
	}
});
}
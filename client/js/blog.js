Posts = new Mongo.Collection("posts");
if(Meteor.isClient) {
	Meteor.subscribe("posts");
	Template.admin_blog.events({
		"click a#add_post_button": function() {
			Router.go('/admin/new-post');
		}

	});

	Template.newPost.events ({
		"submit form#post": function(event) {
			event.preventDefault();
			console.log("called");
			var title = event.target.title.value;
			var content = event.target.content.value;

			Posts.insert({
				title: title,
				content: content,
        		createdAt: new Date() // current time
        	});

			Router.go('admin/blog');
		},
		"submit form#edit": function(event) {
			event.preventDefault();
			console.log("ITS AN EDIT!");
			var title = event.target.title.value;
			var content = event.target.content.value;
			var parts = location.href.split('/');
			var id = parts.pop();
			Posts.update(id, {
				$set: {title: title, content: content}
			});
			Router.go('admin/blog');
		}


	});
	Template.admin_post.events({
		"click td.delete": function () {
			Posts.remove(this._id);
		},
		"click td.edit": function() {
			Router.go('/admin/edit-post/'+this._id);
		}
	});

	Template.blog.helpers({
		posts: function () {
			return Posts.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.admin_blog.helpers({
		posts: function () {
			return Posts.find({}, {sort: {createdAt: -1}});
		}
	});

}
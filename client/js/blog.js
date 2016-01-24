if(Meteor.isClient) {

	Meteor.subscribe("posts");

	Template.blog.helpers({
		posts: function () {
			return Posts.find({}, {sort: {createdAt: -1}});
		}

	});

}
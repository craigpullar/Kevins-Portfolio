if(Meteor.isServer) {
	Posts = new Mongo.Collection("posts");
	Galleries = new Mongo.Collection("galleries");
	GalleryImages = new Mongo.Collection("gallery_images");

	Images = new FS.Collection("images", {
		stores: [new FS.Store.FileSystem("images",{path: './public/uploads'})]
	});
	Images.allow({
		'insert': function () {
    // add custom authentication code here
    return true;
}
});
}


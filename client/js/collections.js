	/* RESIZE IMAGE SCRIPT */
	var resize = function(fileObj, readStream, writeStream){ 
		gm(readStream, fileObj.name()).resize('1300>').stream().pipe(writeStream);
		
	};
	/*---------------------*/
	/* DECLARE COLLECTIONS */
	/*---------------------*/
	Posts = new Mongo.Collection("posts");
	Galleries = new Mongo.Collection("galleries");
	GalleryImages = new Mongo.Collection("gallery_images");

	Images = new FS.Collection("images", {
		stores: [
		new FS.Store.FileSystem("images", { transformWrite: resize })
		]
	});
	LandscapeSlideshow = new FS.Collection("LandscapeSlideshow", {
		stores: [
		new FS.Store.FileSystem("LandscapeSlideshow", { transformWrite: resize })
		]
	});
	PortraitSlideshow = new FS.Collection("PortraitSlideshow", {
		stores: [
		new FS.Store.FileSystem("PortraitSlideshow", { transformWrite: resize })
		]
	});

	LandscapeSlideshow.allow({
		'insert': function () {
			return true;
		}
	});
	PortraitSlideshow.allow({
		'insert': function () {
			return true;
		}
	});
	Images.allow({
		'insert': function () {
			return true;
		}
	});

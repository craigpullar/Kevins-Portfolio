
if(Meteor.isClient) {
	Meteor.subscribe("gallery_images");
	Meteor.subscribe("galleries");
	Meteor.subscribe("images");

	/* ------------ */
	/* GALERY LOGIN */
	/* ------------ */
	Template.galleryLogin.events({
		"click #galleryLogin > button" : function () {
			$('#message').hide();
			if($('#galleryLogin > input[type="password"]').val() == this.gallery.password){
				Session.set(this._id, true);
				Router.go('/view-gallery/' + this._id);

			}
			else  {
				$('#message').fadeIn();
			}
		},
		"keypress input[type='password']" : function(event) {
			if (event.which === 13) {
				event.preventDefault();
				$('#message').hide();
				if($('#galleryLogin > input[type="password"]').val() == this.gallery.password){
					Session.set(this._id, true);
					Router.go('/view-gallery/' + this._id);

				}
				else  {
					$('#message').fadeIn();
				}
			}
		}
	});

	/* -------------------- */
	/* LANDSCAPE GALLERY JS */
	/* -------------------- */

	Template.landscape_galleries.helpers({
		images: function () {
			var gallery = Galleries.findOne({type: "landscape", private : false, image_count: {$gt: 0}}, {sort: {createdAt: -1}});
			return GalleryImages.find({gallery_id: gallery._id},{sort: {createdAt: -1}});
		}
	});
	Template.landscape_galleries.rendered = function () {
		//IF PRIVATE && SESSION VAIRABLE NOT SET TAKE THEM TO GALLERY LOGIN
		$('.gallery-container').imagesLoaded().progress( function(){
			$('.gallery-container').masonry({
				columnWidth: '.grid-sizer',
				itemSelector: '.masonry-item',
				percentPosition: true
			});
		});
		$("img.gallery").unveil(50, function() {
			$('.gallery-container').imagesLoaded().progress( function(){
				$('.gallery-container').masonry({
					columnWidth: '.grid-sizer',
					itemSelector: '.masonry-item',
					percentPosition: true
				});
			});
		});
	};
	Template.landscape_galleries.events({
		"click img" : function(event) {
			initSlideshow($(event.target).parent().index()-1);
		},
		"click .clicker" : function(event) {
			$(event.target).next('img').click();
		}

	});


	/* ------------------- */
	/* CUSTOMER GALLERY JS */
	/* ------------------- */
	Template.customer_gallery.helpers ({
		Galleries: function () {
			return Galleries.find({private : true, image_count: {$gt: 0}}, {sort: {createdAt: -1}});
		},
	});

	/*------------*/
	/* WEDDINGS JS */
	/*------------*/
	Template.wedding_galleries.helpers({
		Galleries: function () {
			return Galleries.find({type: "wedding", private : false, image_count: {$gt: 0}}, {sort: {createdAt: -1}});
		},
	});
	Template.gallery.events({
		"click .img" : function() {
			if(!this.private)
				Router.go('/view-gallery/' + this._id);
			else {
				Router.go('/gallery-login/' + this._id);
			}
		}
	});


	/*-------------*/
	/* POTRAITS JS */
	/*-------------*/
	Template.portrait_galleries.helpers({
		Galleries: function () {
			return Galleries.find({type: "portrait", private : false, image_count: {$gt: 0}}, {sort: {createdAt: -1}});
		}
	});
	Template.portrait_galleries.events({
		"click .img" : function() {
			Router.go('/view-gallery/' + this._id);
		}
	});

	/*------------*/
	/* GALLERY JS */
	/*------------*/
	Template.gallery.helpers({
		getImage : function() {	
			var image = GalleryImages.find({gallery_id : this._id}).fetch()[0].image;
			return image;
		}
	});


	/*----------------*
	/*GALLERY FULL JS */
	/*----------------*/
	var initSlideshow = function(index) {
		var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [];
$('img.gallery').each(function(){
	var src = $(this).attr('src');
	var tempImage = new Image();
	tempImage.src = src;
	var image = {'src':src, 'w':tempImage.width, 'h': tempImage.height };
	items.push(image);
});

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: index// start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
}

Template.gallery_full.events({
	"click img" : function(event) {
		initSlideshow($(event.target).parent().index()-1);
	},
	"click .clicker" : function(event) {
		$(event.target).next('img').click();
	}

});
Template.gallery_full.rendered = function() {
	//IF PRIVATE && SESSION VAIRABLE NOT SET TAKE THEM TO GALLERY LOGIN
	if (this.data.gallery.private && !Session.get(this.data._id)) Router.go('/gallery-login/' + this.data._id);
	$('.gallery-container').imagesLoaded().progress( function(){
		$('.gallery-container').masonry({
			columnWidth: '.grid-sizer',
			itemSelector: '.masonry-item',
			percentPosition: true
		});
	});
	$("img.gallery").unveil(50, function() {
		$('.gallery-container').imagesLoaded().progress( function(){
			$('.gallery-container').masonry({
				columnWidth: '.grid-sizer',
				itemSelector: '.masonry-item',
				percentPosition: true
			});
		});
	});
};


}
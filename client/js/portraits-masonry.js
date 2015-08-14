if(Meteor.isClient) {
	Template.portraits
	.rendered = function() {
		var $container = $('#portraits-container');

		$container.imagesLoaded( function(){
			$container.masonry({
				itemSelector: '.result-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		});	

	};
}
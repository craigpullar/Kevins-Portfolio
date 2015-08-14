if(Meteor.isClient) {
	Template.weddings
	.rendered = function() {
		var $container = $('#weddings-container');

		$container.imagesLoaded( function(){
			$container.masonry({
				itemSelector: '.result-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		});	

	};
}
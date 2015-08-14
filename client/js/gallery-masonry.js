if(Meteor.isClient) {
	Template.galleries.rendered = function() {
		var $container1 = $('#result-container');

		$container1.imagesLoaded( function(){
			$container1.masonry({
				itemSelector: '.result-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		});	
		var $container2 = $('#result-container-2');

		$container2.imagesLoaded( function(){
			$container2.masonry({
				itemSelector: '.result-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});	 
		});	
		var $container3 = $('#result-container-3');

		$container3.imagesLoaded( function(){
			$container3.masonry({
				itemSelector: '.result-item',
				columnWidth: '.grid-sizer',
				percentPosition: true
			});
		});
	};
}
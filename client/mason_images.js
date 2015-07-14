if(Meteor.isClient){
   Template.imageGallery.rendered  = function() {
      var $container = $('.grid');

       $container.imagesLoaded( function(){
         $container.masonry({
            // set itemSelector so .grid-sizer is not used in layout
             itemSelector: '.grid-item',
             // use element for option
             columnWidth: '.grid-sizer',
             percentPosition: true
         });
       });
             $('.grid').css("margin-top",viewport_height);
   };
}

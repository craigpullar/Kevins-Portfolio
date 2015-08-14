if (Meteor.isClient) {

	Template.AppLayout.events({


		"click i#mobile-menu-icon": function (event) {
			console.log("called");

			$('nav').css('display','block');
			$('nav').addClass('slideInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$('nav').removeClass('slideInLeft');

			});
		},


		"click #wrapper" : function (event) {
			if ($('i#mobile-menu-icon').is(':visible')) {

				$('nav').addClass('slideOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$('nav').removeClass('slideOutLeft');
					$('nav').css('display','none');
				});
			}

		},

		"click nav" : function (event) {
			event.stopPropagation();
		}


	});

	Template.weddings.events({
		'click a#galleries' : function(event){
			$('#pricing-content').fadeOut();
			$("#weddings-container").fadeIn();
			$('a#galleries').addClass('active');
			$('a#pricing').removeClass('active');
		},
		'click a#pricing' : function(event){
			$("#weddings-container").fadeOut();
			$('#pricing-content').fadeIn();
			$('a#pricing').addClass('active');
			$('a#galleries').removeClass('active');
		}
	});

	Template.registerHelper('formatDate', function(date) {
		return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
	});

}

if (Meteor.isClient) {

	Meteor.subscribe("landscape_slideshow");
	Meteor.subscribe("portrait_slideshow");
	Meteor.subscribe("dictionary");

	Template.AppLayout.rendered = function () {
		$('html').height($(document).height());
	};

	Template.welcome.helpers({
		landscapeImages : function(){
			return LandscapeSlideshow.find();
		},
		portraitImages : function(){
			return PortraitSlideshow.find();
		},
		intro : function() {
			return Dictionary.find({_id : 'intro'}).fetch()[0].content;
		}
	});



	/* SLIDE OUT NAV EVENTS */
	Template.mobileNav.rendered = function(){	

		var mobile_nav = function(menu_container,mobile_nav) {

	//Insert neccesary html
	$(menu_container).append('<div id="rect1"  style="background:#333;"></div><div id="rect2"  style="background:#333;"></div><div id="rect3"  style="background:#333;"></div>');
	$('<div id="mobile_back"></div>').insertBefore($(menu_container).parent());
	
	//Assign vatiables
	var animating = false,
	toCloseIcon = true,
	list_item = mobile_nav + ' li';
	back = '#mobile_back';


	

	//Click event
	$(menu_container + ', ' + back + ', #mobilenavigation li a').click(function(){
		if (!$(mobile_nav).hasClass('nav-open') && !animating) {
			animating = true;
			$(menu_container).addClass('animate');
			var t_delay = 300;
			$(back).fadeIn();
			$(list_item).each(function(){
				$(this).delay(t_delay).fadeIn(500);
				t_delay += 50;
			});
			$(list_item + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).addClass('nav-open');
		} else if(!animating) {
			animating = true;
			$(menu_container).removeClass('animate');
			$(list_item).fadeOut();
			$(back).fadeOut();
			$(list_item +', ' + back + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).removeClass('nav-open');
		}
	});
	
}	
mobile_nav('.Menu', 'ul#mobilenavigation');


};
Template.adminMobileNav.rendered = function(){	

	var mobile_nav = function(menu_container,mobile_nav) {

	//Insert neccesary html
	$(menu_container).append('<div id="rect1"  style="background:#333;"></div><div id="rect2"  style="background:#333;"></div><div id="rect3"  style="background:#333;"></div>');
	$('<div id="mobile_back"></div>').insertBefore($(menu_container).parent());
	
	//Assign vatiables
	var animating = false,
	toCloseIcon = true,
	list_item = mobile_nav + ' li';
	back = '#mobile_back';


	

	//Click event
	$(menu_container + ', ' + back + ', #mobilenavigation li a').click(function(){
		if (!$(mobile_nav).hasClass('nav-open') && !animating) {
			animating = true;
			$(menu_container).addClass('animate');
			var t_delay = 300;
			$(back).fadeIn();
			$(list_item).each(function(){
				$(this).delay(t_delay).fadeIn(500);
				t_delay += 50;
			});
			$(list_item + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).addClass('nav-open');
		} else if(!animating) {
			animating = true;
			$(menu_container).removeClass('animate');
			$(list_item).fadeOut();
			$(back).fadeOut();
			$(list_item +', ' + back + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).removeClass('nav-open');
		}
	});
	
}	
mobile_nav('.Menu', 'ul#mobilenavigation');


};

/* HIDE AND SHOW FOR WEDDING CONTENT */
Template.weddings.events({
	'click a#galleries' : function(event){
		$('#pricing-content').hide();
		$("#weddings-container").fadeIn();
		$('a#galleries').addClass('active');
		$('a#pricing').removeClass('active');
	},
	'click a#pricing' : function(event){
		$("#weddings-container").hide();
		$('#pricing-content').fadeIn();
		$('a#pricing').addClass('active');
		$('a#galleries').removeClass('active');
	}
});
/* HIDE AND SHOW FOR PORTRAIT CONTENT */
Template.portraits.events({
	'click a#galleries' : function(event){
		$('#pricing-content').hide();
		$("#portrait-container").fadeIn();
		$('a#galleries').addClass('active');
		$('a#pricing').removeClass('active');
	},
	'click a#pricing' : function(event){
		$("#portrait-container").hide();
		$('#pricing-content').fadeIn();
		$('a#pricing').addClass('active');
		$('a#galleries').removeClass('active');
	}
});

/* HIDE AND SHOW FOR LANDSCAPE CONTENT */

//Convert code to landscape
Template.landscape.events({
	'click a#galleries' : function(event){
		$('#pricing-content').hide();
		$("#landscape-container").fadeIn();
		$('a#galleries').addClass('active');
		$('a#pricing').removeClass('active');
	},
	'click a#pricing' : function(event){
		$("#landscape-container").hide();
		$('#pricing-content').fadeIn();
		$('a#pricing').addClass('active');
		$('a#galleries').removeClass('active');
	}
});

/* FORMAT DATE FUNCTION */
Template.registerHelper('formatDate', function(date) {
	return moment(date).format('dddd, MMMM Do YYYY');
});
Template.registerHelper('getFormattedDate', function(date) {
	console.log(date);
	Date.prototype.toDateInputValue = (function() {
		var local = new Date(date);
		local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
		return local.toJSON().slice(0,10);
	});
	return date.toDateInputValue();
});
Template.welcome.rendered = function () {
	// $("#portrait-slides").slidesjs({height:300});
	$("#landscape-slides").slidesjs({
		width: 700,
		height: 370,
		play: {
			active: false,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
        effect: "fade",
        // [string] Can be either "slide" or "fade".
        interval: 5000,
        // [number] Time spent on each slide in milliseconds.
        auto: true,
        // [boolean] Start playing the slideshow on load.
        swap: false,
        // [boolean] show/hide stop and play buttons
        pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
        restartDelay: 2500
        // [number] restart delay on inactive slideshow
    },
    navigation: {
    	active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
        effect: "fade"
        // [string] Can be either "slide" or "fade".
    }
});
	$("#portrait-slides").slidesjs({
		width: 700,
		height:850,
		play: {
			active: false,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
        effect: "fade",
        // [string] Can be either "slide" or "fade".
        interval: 5000,
        // [number] Time spent on each slide in milliseconds.
        auto: true,
        // [boolean] Start playing the slideshow on load.
        swap: false,
        // [boolean] show/hide stop and play buttons
        pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
        restartDelay: 2500
        // [number] restart delay on inactive slideshow
    },
    navigation: {
    	active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
        effect: "fade"
        // [string] Can be either "slide" or "fade".
    }
});
};
};
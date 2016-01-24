if(Meteor.isClient) {

	/* LOGIN EVENTS */
	Template.LoginLayout.events({
		"click button.submit" : function(event) {
			checkLogin();

		},
		"keypress form.login input" : function(evt,event) {
			if (evt.which === 13) {
				evt.preventDefault();
				checkLogin();
			}
			else 
				$('div#message').fadeOut();
		}


	});

	/* CHECK LOGIN FUNCTION */
	var checkLogin = function() {
		passcode = "kevbob123";
		user_passcode = $('form.login input').val();
		if (passcode == user_passcode) {
			Session.set('logged_in',true);
			Router.go('admin/weddings');
		}

		else{
			Session.set('logged_in',false);
			$('div#message').fadeIn();
		}

	}
}


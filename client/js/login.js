if(Meteor.isClient) {
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
	var checkLogin = function() {
		passcode = "kevin123";
		user_passcode = $('form.login input').val();
		if (passcode == user_passcode)
			Router.go('admin/dashboard');
		else
			$('div#message').fadeIn();
	}
}


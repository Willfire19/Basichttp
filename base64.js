$(document).ready(function(){
	var error = $('<p>Username and Password must be at least 3 characters long</p>');
	/*$(':submit').click(function(e) { */
		$('#encode').click(function(e) {
		$(':text').each(function() {
			var username = $("#username").val();
			var password = $("#password").val();
			if (username.length < 3 || password.length < 3) {
				$("form").append(error);
			}
			else{
				
				var encode_string = username+':'+password;
				var base64_encode = btoa(encode_string);
				$("p4").text('Authorization: Basic '+base64_encode);
				$("p5").text('The string that will be encoded is: '+encode_string);
				$("p1").text('The Username is: '+username);
				$("p2").text('The Password is: '+password);
			}
		});
		e.preventDefault();
	});
});

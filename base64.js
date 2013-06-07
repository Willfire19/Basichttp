$(document).ready(function(){
		$('#encode').click(function(e) {
			var username = $("#username").val();
			var password = $("#password").val();
			if (username.length < 3 || password.length < 3) {
				$("p").text("Username and/or password needs to be at least 3 characters long");
			}
			else{
				$("p").text("");
				var encode_string = username+':'+password;
				var base64_encode = btoa(encode_string);
				$("#decode").val("Basic "+base64_encode);
			}
		e.preventDefault();
	});
});

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
				$("p4").text('Authorization: Basic '+base64_encode);
				$("p5").text('The string that will be encoded is: '+encode_string);
				$("p1").text('The Username is: '+username);
				$("p2").text('The Password is: '+password);
				$("#decode").val("Basic "+base64_encode);
			}
		e.preventDefault();
	});
});

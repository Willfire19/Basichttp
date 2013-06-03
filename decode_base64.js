$(document).ready(function(){
	var error = $('<p>You may want to put a string in the Decode Base64</p>');
	/*$(':submit').click(function(e) { */
		$('#decode_button').click(function(e) {
		$(':text').each(function() {
			var decode = $("#decode").val();
			if (decode.length == 0) {
				$("form").append(error);
			}
			else{
				var decoded_string = atob(decode);
				$("p5").text('The decoded string is: '+decoded_string);
				var decoded_split = decoded_string.split(':');
				var username = decoded_split[0];
				var password = decoded_split[1];
				$("p1").text('The Username is: '+username);
				$("p2").text('The Password is: '+password);
				$("#username").val(username);
				$("#password").val(password);
			}
		});
		e.preventDefault();
	});
});

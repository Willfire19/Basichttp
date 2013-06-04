$(document).ready(function(){
		$('#decode_button').click(function(e) {
			var decode = $("#decode").val();
			if (decode.length == 0) {
				$("p").text("You may want to put a string in the Decode Base64");
			}
			var correct_decode = decode.split(/ +/);
			$("p1").text('The Base64 string is: '+correct_decode[0]+' '+correct_decode[1]);
			if (correct_decode[0] != "Basic") {
				$("p").text("The word 'Basic' is needed in the decode input");
			}
			else{
				$("p").text("");
				var decoded_string = atob(correct_decode[1]);
				$("p5").text('The decoded string is: '+decoded_string);
				var decoded_split = decoded_string.split(':');
				var username = decoded_split[0];
				var password = decoded_split[1];
				$("p1").text('The Username is: '+username);
				$("p2").text('The Password is: '+password);
				$("#username").val(username);
				$("#password").val(password);
			}
		e.preventDefault();
	});
});

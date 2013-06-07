$(document).ready(function(){
		$('#decode_button').click(function(e) {
			var decode = $("#decode").val();
			var correct_decode = decode.split(/ +/);
			if (decode.length == 0 || correct_decode[0] != "Basic") {
				$("p").text("The word 'Basic' and a string is needed");
			}

			else if (decode == "Basic" || correct_decode[1].length == 0){
				$("p").text("You need a string after the word 'Basic'");
			}

			else{
				$("p").text("");
				var decoded_string = atob(correct_decode[1]);
				var decoded_split = decoded_string.split(':');
				var username = decoded_split[0];
				var password = decoded_split[1];
				$("#username").val(username);
				$("#password").val(password);
			}
		e.preventDefault();
	});
});

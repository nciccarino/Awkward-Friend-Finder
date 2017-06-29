$("#submit").on("click", function() {

	function validate() {

		var invalidGroup = false; 
		var invalidControl = false; 

		$(".form-group").each(function() {
			if ($(this).val() === " ") {
				invalidGroup = true; 
				return invalidGroup; 
			} 
			else {
				invalidGroup = false; 
			}
		}); //.form-group

		$(".form-control").each(function () {
			if ($(this).val() === " ") {
				invalidForm = true;
				return invalid; 
			}
			else {
				invalidForm = false; 
			}
		}); //.form-control

		if (invalidGroup == false && invalidControl == false) {
			var userData = {
				name: $("#name").val().trim(); 
				photo: $("#link").val().trim(); 
				scores: [
					$("#q1").val(), 
					$("#q2").val(),
					$("#q3").val(),
					$("#q4").val(),
					$("#q5").val(),
					$("#q6").val(),
					$("#q7").val(),
					$("#q8").val(),
					$("#q9").val(),
					$("#q10").val()
				]
			} //end userData

			var currentURL = window.location.origin; 

			$.post(currentURL + "/api/friends", userData, function(arr) {
				$("#matchName").text(arr.name); 
				$("#matchPhoto").attr("scr", arr.photo); 
				$("#modalResults").modal("toggle"); 
			}); 
		} // end if statement
		else {
			alert("Missing information!"); 
		}

	} //validate 
}); //on click
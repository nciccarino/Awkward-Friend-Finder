$("#submit").on("click", function(event) {
	event.preventDefault();
	if ($(".form-control").val().trim() !== "") {
		var userData = {
					name: $("#name").val().trim(), 
					photo: $("#link").val().trim(), 
					score: [
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

		console.log(userData); 

		var currentURL = window.location.origin; 

		console.log(currentURL); 

		$.post(currentURL + "/api/friends", userData, function(data) {
			$("#matchName").text(data.name); 
			$("#matchPhoto").attr("src", data.photo); 
			$("#modalResults").modal('toggle'); 
			$("#name").val(""); 
			$("link").val(""); 
		}); 
	}//if statement 
	else {
		alert("Missing required information!"); 
		$("#prompt").css("display", "block");
		return false; 
	} 

}); //on click

// //return home
// $("#close").on("click", function(event) {
// 	$.get("/", function(req, res) {
// 		location.replace(res); 
// 	});
// });
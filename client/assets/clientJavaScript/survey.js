$("#submit").on("click", function() {
	var userData = {
				name: $("#name").val().trim(), 
				photo: $("#link").val().trim(), 
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
			}; //end userData

			// $.post("/api/friends", userData).done(function(data) {
			// 	console.log(data); 
			// });

			var currentURL = window.location.origin; 

			console.log(currentURL); 

			$.post(currentURL + "/api/friends", userData, function(data) {
				$("#matchName").text(data.name); 
				$("#matchPhoto").attr("scr", data.photo); 
				$("#modalResults").modal("toggle"); 
			}); 

}); //on click
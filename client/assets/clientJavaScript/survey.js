$("#submit").on("click", function(event) {
	event.preventDefault();
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

			console.log(userData); 

			var currentURL = window.location.origin; 

			console.log(currentURL); 

			$.post(currentURL + "/api/friends", userData, function(data) {
				$("#matchName").text(data.name); 
				$("#matchPhoto").attr("src", 'https://fanart.tv/api/download.php?type=download&image=13434&section=3'); 
				$("#modalResults").modal('show'); 
			}); 

}); //on click
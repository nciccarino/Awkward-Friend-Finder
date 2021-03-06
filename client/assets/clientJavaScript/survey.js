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
		}); 
	}//if statement 
	else { //prompts to fill in info both in an alert and in the footer
		$("#prompt").css("display", "block");
		return false; 
	} 

}); //on click

//reloads page
$("#close").on("click", function(evnet) {
	location.reload();
	$(document).ready(function(){
    $(this).scrollTop(0);
	});
}); 
var userData = require("../client/assets/userData"); 

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(userData); 
	}); 

	app.post("/api/friends", function(req, res) {

		var newUser = req.body;

		var bestFriend = {}; 

		var best = 0;

		var currentBest = null; 

		for (var i = 0; i < userData.length; i++) {
			var diffTotals = []; 
			// get the differences between the two scores and push the answers to an array
			for(var index = 0; index < userData[i].score.length; index++) {
				var diff = Math.abs(userData[i].score[index] - newUser.score[index]); 
				diffTotals.push(diff); 
			}
			// take the array and add them up for the total to essentially recieve a score
			var total = diffTotals.reduce(function(a, b) {
				return a + b;
			}, 0); 

			if (currentBest == null) {
				currentBest = total; 
			}
			// lowest score wins
			else if (total < currentBest) {
				best = i; 
				currentBest = total; 
			}
		}

		bestFriend = userData[best]; 

		userData.push(req.body); // newUser 

		res.json(bestFriend); 
	}); 
}; 



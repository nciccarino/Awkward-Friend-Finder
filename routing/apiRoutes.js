var userData = require("../client/assets/userData"); 

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(userData); 
	}); 

	app.post("/api/friends", function(req, res) {
		userData.push(req.body);  
	}); 

}; 
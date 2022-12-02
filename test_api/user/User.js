// User.js
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
	timestamp: String,
	ip: String,
	wpm: String,
	awpm: String,
	accuracypercent: String,
});
mongoose.model("User", UserSchema);
module.exports = mongoose.model("User");

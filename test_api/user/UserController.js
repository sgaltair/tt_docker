// UserController.js
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require("./User");
module.exports = router;

router.post("/", function (req, res) {
	User.create(
		{
			timestamp: req.body.timestamp,
			ip: req.body.ip,
			wpm: req.body.wpm,
			awpm: req.body.awpm,
			accuracypercent: req.body.accuracypercent,
		},
		function (err, user) {
			if (err)
				return res
					.status(500)
					.send("There was a problem adding information to the databae.");
			res.status(200).send(user);
		}
	);
});
// Returns all users in the db
router.get("/", function (req, res) {
	User.find({}, function (err, users) {
		if (err)
			return res.status(500).send("There was a problem finding the users.");
		res.status(200).send(users);
	});
});
module.exports = router;

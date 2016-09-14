var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.send(`
		<h3>Gunther web-store</h3>
		<p>Generic web store with interface that allows a proprietor to manage content.</p>
	`);
});

module.exports = router;
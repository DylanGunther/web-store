var express = require('express');
var router = express.Router();


router.get('/message', function(req, res) {
	res.send(`
		<h3>Gunther web-store</h3>
		<p>Messaging and commisions page.</p>
	`);
});

module.exports = router;
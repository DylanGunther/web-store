var express = require('express');
var router = express.Router();


router.get('/gallery', function(req, res) {
	res.send(`
		<h3>Gunther web-store</h3>
		<p>Gallery of works.</p>
	`);
});

module.exports = router;
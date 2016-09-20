var express = require('express');
var router = express.Router();

router.get('/message', function(req, res) {
  res.render('message');

});

module.exports = router;
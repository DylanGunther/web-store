var express = require('express');
var app = express();
var reload = require('reload');
var http = require('http')
var server = http.createServer(app)

app.set('port', process.env.PORT || 3000);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/gallery', function(req, res) {
    res.render('pages/gallery');
});

app.get('/message', function(req, res) {
    res.render('pages/message');
});

var server = app.listen(app.get('port'), function() {
	console.log('Go to http://localhost:' + app.get('port') 
			+ ' on your browser');
});

reload(server, app);